interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
          selectedCategory === null
            ? "bg-white text-black"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            selectedCategory === category
              ? "bg-cyan-500 text-white"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 