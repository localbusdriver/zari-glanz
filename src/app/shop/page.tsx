// import Image from "next/image";
import { ProductsDisplay } from "@/components/shop/products-display";

import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <div id="shop-hero" className="relative w-screen h-96 bg-amber-600">
        {/* <Image
          src="/assets/shop/hero.jpg"
          alt="shop-hero"
          height={1080}
          width={1920}
          className="w-full object-fill object-top -top-1/2 absolute"
        /> */}
      </div>

      <ProductsDisplay />

      <Footer />
    </div>
  );
}
