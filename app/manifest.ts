import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rioa",
    short_name: "Rioa",
    description: "We build from the block up.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D1B24",
    theme_color: "#0D1B24",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
