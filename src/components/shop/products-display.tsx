"use client"

import { useState } from "react";

import ProductsFilterBar from "@/components/shop/products-filter-bar";

export interface Filter{
  category?: string[]
  size?: string[]
  colour?: string[]
  priceRange?: {
    min: number
    max: number
  }
  sortBy?: "price-asc" | "price-desc" | "name-asc" | "name-desc" | "newest" | "oldest"
}

export const ProductsDisplay = () => {
  const [filters, setFilters] = useState<Filter>({
    category: ["mens"],
    size: ["s", "m", "l", "xl"],
    colour: [
      "black",
      "white",
      "grey",
      "blue",
      "pink",
      "purple",
      "yellow",
      "orange",
      "red",
      "green",
    ],
    priceRange: {
      min: 0,
      max: 1000,
    },
    sortBy: "price-asc",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFilter = (filterKey: keyof Filter, filterValue: any) => { 
    setFilters(prev => ({
      ...prev,
      [filterKey]: filterValue
    }))
  }

  const toggleArrayFilter = (
    filterKey: "category" | "size" | "colour",
    filterValue: string
  ) => {
    setFilters((prev) => {
      const currentArray = prev[filterKey] || [];
      const newArray = currentArray.includes(filterValue)
        ? currentArray.filter((value) => value !== filterValue)
        : [...currentArray, filterValue];
      return {
        ...prev,
        [filterKey]: newArray,
      };
    });
  };

  return (
    <div className="w-screen">
      <ProductsFilterBar filters={filters} setFilters={setFilters} toggleArrayFilter={toggleArrayFilter} updateFilter={updateFilter} />
    </div>
  )
}

