"use client";

import { useState } from "react";
import FoodMenuHero from "./FoodMenuHero";
import CategoryTabs from "./CategoryTabs";
import BrandGrid from "./BrandGrid";
import TrendingSection from "./TrendingSection";

export default function FoodMenuContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <FoodMenuHero search={search} onSearchChange={setSearch} />
      <div className="mt-8">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <TrendingSection />
        <BrandGrid search={search} activeCategory={activeCategory} />
      </div>
    </>
  );
}
