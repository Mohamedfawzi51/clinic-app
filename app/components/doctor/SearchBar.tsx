"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="البحث عن مريض..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`rounded-full border-none bg-surface-container py-2 pr-4 pl-10 text-right text-body-md transition-all focus:ring-2 focus:ring-primary/20 ${
          focused ? "w-80" : "w-72"
        }`}
      />
      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-outline" />
    </div>
  );
}
