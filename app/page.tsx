import Image from "next/image";
import { Portfolio } from "./sections/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen px-6">
      <header className="max-w-5xl mx-auto flex justify-center pt-10 pb-2">
        <Image
          src="/logo-color-no-bg.svg"
          alt="Rioa"
          width={110}
          height={34}
          priority
        />
      </header>

      <section className="max-w-5xl mx-auto text-center pt-28 pb-24">
        <h1 className="text-5xl md:text-6xl font-medium leading-[1.15] text-accent">
          we build on the <span className="text-primary">block.</span>
        </h1>
        <p className="text-base text-accent/55 mt-6">
          independent studio · shipping since 2023
        </p>
        <a
          href="#portfolio"
          className="inline-block text-sm font-medium text-base-100 bg-primary px-6 py-3 rounded-lg mt-9 hover:opacity-90 transition"
        >
          see our work
        </a>
      </section>

      <Portfolio />
    </main>
  );
}
