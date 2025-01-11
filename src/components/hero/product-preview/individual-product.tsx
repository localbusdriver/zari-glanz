"use client";

import { StockType } from "@/lib/data/stock";
/** Props:
 * url - url to product page
 *
 */

const IndividualProduct = ({ product }: { product: StockType }) => {
  const handleCardClick = () => {
    window.location.href = `/${product.title}`;
  };
  return (
    <div
      onClick={handleCardClick}
      className="p-2 space-y-2 border border-black w-64 h-92"
    >
      {/* <Image
        src={img}
        alt={`image for ` + title}
        width={200}
        height={200}
        className="w-full h-64"
      /> */}
      <div className="w-full bg-black h-64" />
      <div className="flex justify-between items-center">
        <h3 className="text-lg">{product.title}</h3>
        <p className="text-xl">${product.price}</p>
      </div>
      <p className="text-xs">{product.colours}</p>
    </div>
  );
};

export default IndividualProduct;
