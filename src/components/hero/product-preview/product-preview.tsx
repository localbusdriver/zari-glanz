const ProductPreview = () => {
  return (
    <main className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:py-8 lg:px-32">
        <div className="space-y-5 col-span-1 h-full">
          <div className="bg-blue-800 h-[568px]"></div>
          <h4 className="font-bold text-3xl italic">Luxury</h4>
        </div>

        <div className="space-y-5 col-span-1 h-full">
          <div className="bg-red-800 h-[568px]"></div>
          <h4 className="font-bold text-3xl italic">Comfort</h4>
        </div>
        <div className="space-y-5 col-span-1 h-full">
          <div className="bg-yellow-800 h-[568px]"></div>
          <h4 className="font-bold text-3xl italic">Sport</h4>
        </div>
      </div>
    </main>
  );
};

export default ProductPreview;
