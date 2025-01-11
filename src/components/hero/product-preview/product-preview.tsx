import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectContent,
  SelectLabel,
} from "@/components/ui/select";

import IndividualProduct from "./individual-product";

import { stockList } from "@/lib/data/stock";

const ProductPreview = () => {
  return (
    <main className="w-full">
      <div className="w-full py-2 bg-gray-200 px-32 flex flex-row gap-1 items-center">
        <h4>Filter: </h4>
        <Select>
          <SelectTrigger className="w-36">
            <SelectValue defaultValue="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="expensivest">Price</SelectItem>
              <SelectItem value="cheapest">Price</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectItem value="available">Only availble</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div id="item-preview" className="px-32 py-3">
        {stockList.map((item, i) => (
          <div key={`item-${item.title}-${i}`}>
            <IndividualProduct product={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductPreview;
