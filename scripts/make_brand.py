"""Generate the Rioa "Refined Trio / Harbor Blue" brand assets.

Usage: python -I make_brand.py <Outfit variable ttf> <repo root>

Needs fonttools and Pillow (pip install fonttools pillow) and rsvg-convert
(brew install librsvg). The font is Outfit[wght].ttf from Google Fonts.
"""
import io
import math
import os
import subprocess
import sys

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image

FONT_PATH, REPO = sys.argv[1], sys.argv[2]

NIGHT = "#0D1B24"
HARBOR = "#5BA4C9"
DEEP = "#1D4E6B"
GOLD = "#F2C14E"
MIST = "#EEF4F7"
WHITE = "#FFFFFF"

# Refined Trio: two stacked cells on the left, the accent cell on the right.
# Flat-top hexagons whose corners are rounded by a stroke of the fill colour,
# laid out on a honeycomb grid with a visible gap between cells.
STROKE = 5
APOTHEM = 16.8  # visible centre-to-edge distance, stroke included
GAP = 3.5
R_POLY = (APOTHEM - STROKE / 2) / (math.sqrt(3) / 2)
R_GRID = (2 * APOTHEM + GAP) / math.sqrt(3)
DX, HALF_DY = 1.5 * R_GRID, (2 * APOTHEM + GAP) / 2
HALF_W = DX / 2 + R_POLY + STROKE / 2
LEFT_X, RIGHT_X = 50 - HALF_W + R_POLY + STROKE / 2, 50 + HALF_W - R_POLY - STROKE / 2


def hexagon(cx, cy):
    return " ".join(
        f"{cx + R_POLY * math.cos(math.radians(60 * i)):.2f},"
        f"{cy + R_POLY * math.sin(math.radians(60 * i)):.2f}"
        for i in range(6)
    )


CELLS = [hexagon(LEFT_X, 50 - HALF_DY), hexagon(LEFT_X, 50 + HALF_DY)]
ACCENT = hexagon(RIGHT_X, 50)
MARK_X0, MARK_X1 = 50 - HALF_W, 50 + HALF_W
MARK_Y0, MARK_Y1 = 50 - HALF_DY - APOTHEM, 50 + HALF_DY + APOTHEM
MARK_CX, MARK_CY = 50.0, 50.0

font = instancer.instantiateVariableFont(TTFont(FONT_PATH), {"wght": 500})
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
UPM = font["head"].unitsPerEm
CAP = font["OS/2"].sCapHeight


def mark(cell, accent, transform=""):
    t = f' transform="{transform}"' if transform else ""
    polys = "".join(
        f'<polygon points="{p}" fill="{cell}" stroke="{cell}"/>' for p in CELLS
    )
    polys += f'<polygon points="{ACCENT}" fill="{accent}" stroke="{accent}"/>'
    return f'<g stroke-width="5" stroke-linejoin="round"{t}>{polys}</g>'


def text_path(text, x, baseline, size, tracking=-0.02):
    """Outline `text` in Outfit Medium. Returns (path d, advance width)."""
    scale = size / UPM
    pen = SVGPathPen(glyphs)
    cursor = x
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        tpen = TransformPen(pen, (scale, 0, 0, -scale, cursor, baseline))
        glyphs[name].draw(tpen)
        cursor += glyphs[name].width * scale
        if i < len(text) - 1:
            cursor += tracking * size
    return pen.getCommands(), cursor - x


def svg(w, h, body, view=None):
    vb = view or f"0 0 {w} {h}"
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" '
        f'width="{w}" height="{h}">{body}</svg>\n'
    )


def fmt(n):
    return f"{n:.2f}".rstrip("0").rstrip(".")


# Lockup: mark, then "Rioa" with its cap height centred on the mark.
WORD_SIZE = 75
WORD_GAP = 14
cap = CAP * WORD_SIZE / UPM
baseline = MARK_CY + cap / 2
word_d, word_w = text_path("Rioa", MARK_X1 + WORD_GAP, baseline, WORD_SIZE)
LOCK_X0, LOCK_X1 = MARK_X0, MARK_X1 + WORD_GAP + word_w
LOCK_Y0, LOCK_Y1 = MARK_Y0, MARK_Y1
LOCK_W, LOCK_H = LOCK_X1 - LOCK_X0, LOCK_Y1 - LOCK_Y0
LOCK_VIEW = f"{fmt(LOCK_X0)} {fmt(LOCK_Y0)} {fmt(LOCK_W)} {fmt(LOCK_H)}"
MARK_VIEW = f"{fmt(MARK_X0)} {fmt(MARK_Y0)} {fmt(MARK_X1 - MARK_X0)} {fmt(MARK_Y1 - MARK_Y0)}"


def lockup(cell, accent, ink, height=120):
    width = round(height * LOCK_W / LOCK_H)
    body = mark(cell, accent) + f'<path d="{word_d}" fill="{ink}"/>'
    return svg(width, height, body, LOCK_VIEW)


def mark_only(cell, accent, size=256):
    w = round(size * (MARK_X1 - MARK_X0) / (MARK_Y1 - MARK_Y0))
    return svg(w, size, mark(cell, accent), MARK_VIEW)


def tile(bg, cell, accent, size, radius=0.0, fit=0.78):
    """The mark centred on a square ground. `fit` is the share of the side the
    mark's circumscribed circle spans, so it survives a circular crop."""
    circumradius = 40.5  # farthest corner from the mark's centre, plus stroke
    s = (fit * 50) / circumradius
    tx, ty = 50 - MARK_CX * s, 50 - MARK_CY * s
    rx = f' rx="{fmt(radius * 100)}"' if radius else ""
    body = f'<rect width="100" height="100"{rx} fill="{bg}"/>'
    body += mark(cell, accent, f"translate({fmt(tx)} {fmt(ty)}) scale({s:.4f})")
    return svg(size, size, body, "0 0 100 100")


def write(path, content):
    path = os.path.join(REPO, path)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    mode = "wb" if isinstance(content, bytes) else "w"
    with open(path, mode) as f:
        f.write(content)


def png(svg_text, width, height=None):
    args = ["rsvg-convert", "-w", str(width)]
    if height:
        args += ["-h", str(height)]
    return subprocess.run(
        args, input=svg_text.encode(), capture_output=True, check=True
    ).stdout


# --- Logos -----------------------------------------------------------------
B = "public/brand"
logos = {
    "rioa-logo": lockup(HARBOR, GOLD, MIST),  # for dark backgrounds
    "rioa-logo-on-light": lockup(DEEP, HARBOR, NIGHT),
    "rioa-logo-white": lockup(WHITE, WHITE, WHITE),
    "rioa-logo-black": lockup(NIGHT, NIGHT, NIGHT),
}
marks = {
    "rioa-mark": mark_only(HARBOR, GOLD),
    "rioa-mark-on-light": mark_only(DEEP, HARBOR),
    "rioa-mark-white": mark_only(WHITE, WHITE),
    "rioa-mark-black": mark_only(NIGHT, NIGHT),
}
for name, s in {**logos, **marks}.items():
    write(f"{B}/{name}.svg", s)
for name, s in logos.items():
    for w in (600, 1200, 2400):
        write(f"{B}/png/{name}-{w}w.png", png(s, w))
for name, s in marks.items():
    for size in (128, 512, 1024):
        w = round(size * (MARK_X1 - MARK_X0) / (MARK_Y1 - MARK_Y0))
        write(f"{B}/png/{name}-{size}.png", png(s, w, size))

# --- Avatars (square, safe for circular crops) -----------------------------
avatars = {
    "night": (NIGHT, HARBOR, GOLD),
    "harbor": (DEEP, HARBOR, GOLD),
    "mist": (MIST, DEEP, HARBOR),
}
for name, (bg, cell, accent) in avatars.items():
    s = tile(bg, cell, accent, 1024, fit=0.72)
    write(f"{B}/avatars/rioa-avatar-{name}.svg", s)
    for size in (1024, 800, 512, 400, 256, 200, 128, 64):
        write(f"{B}/avatars/rioa-avatar-{name}-{size}.png", png(s, size, size))

# --- Website icons ---------------------------------------------------------
favicon = tile(NIGHT, HARBOR, GOLD, 64, radius=0.22, fit=0.9)
write("app/icon.svg", favicon)
ico_frames = [Image.open(io.BytesIO(png(favicon, n, n))) for n in (16, 32, 48)]
buf = io.BytesIO()
ico_frames[2].save(buf, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)],
                   append_images=ico_frames[:2])
write("app/favicon.ico", buf.getvalue())
write("app/apple-icon.png", png(tile(DEEP, HARBOR, GOLD, 180, fit=0.8), 180, 180))
for n in (192, 512):
    write(f"public/icon-{n}.png", png(tile(NIGHT, HARBOR, GOLD, n, fit=0.72), n, n))

# --- Open Graph card -------------------------------------------------------
OG_W, OG_H = 1200, 630
lock_h = 110
lock_w = lock_h * LOCK_W / LOCK_H
lx, ly = (OG_W - lock_w) / 2, 170
k = lock_h / LOCK_H
og = f'<rect width="{OG_W}" height="{OG_H}" fill="{NIGHT}"/>'
og += (
    f'<g transform="translate({fmt(lx - LOCK_X0 * k)} {fmt(ly - LOCK_Y0 * k)}) scale({k:.4f})">'
    + mark(HARBOR, GOLD)
    + f'<path d="{word_d}" fill="{MIST}"/></g>'
)
TAG = 56
parts = [("we build from the ", MIST), ("block", HARBOR), (" up.", MIST)]
widths = [text_path(t, 0, 0, TAG)[1] for t, _ in parts]
space = TAG * -0.02  # tracking between the runs
x = (OG_W - (sum(widths) + space * (len(parts) - 1))) / 2
for (t, color), w in zip(parts, widths):
    d, _ = text_path(t, x, 430, TAG)
    og += f'<path d="{d}" fill="{color}"/>'
    x += w + space
SUB = "independent studio · rioa.xyz"
sub_w = text_path(SUB, 0, 0, 26, tracking=0)[1]
sub_d, _ = text_path(SUB, (OG_W - sub_w) / 2, 500, 26, tracking=0)
og += f'<path d="{sub_d}" fill="{MIST}" fill-opacity="0.6"/>'
og_svg = svg(OG_W, OG_H, og)
write("app/opengraph-image.png", png(og_svg, OG_W, OG_H))
write("app/twitter-image.png", png(og_svg, OG_W, OG_H))

print(f"lockup aspect {LOCK_W / LOCK_H:.4f}")
