"use client";
// import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full lg:h-16 flex flex-row items-center justify-between bg-white px-8">
      {/* <div className="flex items-center">
        <Image
          src="/zari-logo.png"
          alt="Zari Glanz Logo"
          height={64}
          width={64}
          className="w-16 h-16"
        />
      </div> */}

      {/* <div
        className="flex items-center justify-center absolute left-1/2 -translate-x-1/2"
        id="title"
      > */}
      <div className="flex items-center justify-center" id="title">
        <Link href="/" className="text-2xl font-bold italic">
          Zari Glanz
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3">
        <p className="font-thin cursor-pointer">Bag 🛍️</p>
        <p className="font-thin cursor-pointer">Wishlist ♡</p>
        <Link href="/login" className="font-thin">
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
