import HeroSection from "@/components/hero/hero-cta";
import ProductPreview from "@/components/hero/product-preview/product-preview";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <ProductPreview />
      <div className="w-full text-center py-16 bg-[#880000]">
        <h2 className="text-5xl italic text-zinc-200">
          Wear luxury not comfort
        </h2>
      </div>
    </div>
  );
}
