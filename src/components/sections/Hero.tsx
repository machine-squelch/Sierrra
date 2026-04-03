import Image from "next/image";
import { HeroContent } from "@/components/sections/HeroContent";

export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-[min(72vh,760px)] flex flex-col">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.22] sm:opacity-[0.18]"
        sizes="100vw"
        priority
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/88 to-[#007bff]/25" />
      <div className="relative flex-1 flex flex-col justify-center">
        <HeroContent />
      </div>
    </section>
  );
}
