import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-150"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-300" />
    </div>
  );
}
