import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full lg:flex pb-4">
        <Image
          className="relative"
          src="/logo-color-no-bg.svg"
          alt="RIOA Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="box">
        <h1 className="text-4xl font-mono py-48 h-38">
          We build on the block.
        </h1>
      </div>
    </main>
  );
}
