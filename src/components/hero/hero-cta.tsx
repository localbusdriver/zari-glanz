import { Meie_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Meie = Meie_Script({ weight: "400", subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative w-full md:h-96 ">
      <div
        className="absolute inset-0 bg-[url('/assets/hero-image.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-red-950/40 bg-" aria-hidden="true" />

      <div className="relative px-32 h-full flex items-center justify-start">
        <div className="flex flex-col gap-2 text-white">
          <h1 className={cn("text-4xl font-bold", Meie)}>
            Zari Glanz Underwear
          </h1>
          <p className="text-xl max-w-2xl">
            Luxury silk underwear, worn by Men.
          </p>
          <Link
            href="/shop"
            className="border w-max px-3 py-2 md:mt-3 hover:bg-rose-900 hover:border-rose-900 transition text-white"
          >
            View our products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
