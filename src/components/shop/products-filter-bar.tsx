import { Filter } from "@/components/shop/products-display";

const ProductsFilterBar = ({
  filters,
  // setFilters,
  toggleArrayFilter,
  // updateFilter,
}: {
  filters: Filter;
  setFilters: (filters: Filter) => void;
  toggleArrayFilter: (
    filterKey: "category" | "size" | "colour",
    filterValue: string
  ) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateFilter: (filterKey: keyof Filter, filterValue: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-6 p-4" id="filters" aria-label="Filters">
      {/* Category Filter */}
      <div className="filter-section">
        <h3 className="font-semibold mb-2">Categories</h3>
        <div className="flex flex-col gap-2">
          {["Dresses", "Tops", "Bottoms", "Accessories"].map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.category?.includes(category)}
                onChange={() => toggleArrayFilter("category", category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="filter-section">
        <h3 className="font-semibold mb-2">Sizes</h3>
        <div className="flex gap-2 flex-wrap">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`px-3 py-1 border rounded ${
                filters.size?.includes(size)
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => toggleArrayFilter("size", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="filter-section">
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {["Black", "White", "Red", "Blue", "Green"].map((color) => (
            <button
              key={color}
              className={`px-3 py-1 border rounded ${
                filters.colour?.includes(color) ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => toggleArrayFilter("colour", color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      {/* <div className="filter-section">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={filters.priceRange?.min}
            onChange={(e) =>
              updatePriceRange(
                Number(e.target.value),
                filters.priceRange?.max || 1000
              )
            }
            className="w-24 border rounded px-2 py-1"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.priceRange?.max}
            onChange={(e) =>
              updatePriceRange(
                filters.priceRange?.min || 0,
                Number(e.target.value)
              )
            }
            className="w-24 border rounded px-2 py-1"
            placeholder="Max"
          />
        </div>
      </div> */}

      {/* Sort By */}
      {/* <div className="filter-section">
        <h3 className="font-semibold mb-2">Sort By</h3>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sortBy: e.target.value as Filter["sortBy"],
            }))
          }
          className="w-full border rounded px-2 py-1"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>*/}
    </div>
  );
};

export default ProductsFilterBar;
