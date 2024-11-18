import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Using debounced query to avoid too many requests while typing
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setCountries([]);
      return;
    }

    const fetchCountries = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch countries from the Restcountries API
        const response = await fetch(
          // `https://restcountries.com/v3.1/name/${debouncedQuery}`
          `YOUR_API_URL_HERE/${debouncedQuery}`
        );

        if (!response.ok) {
          throw new Error("No countries found");
        }

        const data = await response.json();

        setCountries(data);
      } catch (err: any) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [debouncedQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleBlur = () => {
    setError(null); 
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={handleChange}
          onBlur={handleBlur} 
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-150"
        />

  
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-300" />
      </div>
      {loading && (
        <div className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-150 animate-pulse">
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity="0.25"
                className="text-gray-200"
              />
              <path d="M12 2a10 10 0 0 1 10 10H12V2z" className="text-white" />
            </svg>
            <span className="ml-4">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-150">
          {error}
        </div>
      )}
      <ul className="m-0 p-0">
        {countries.slice(0, 3).length > 0 ? (
          countries.slice(0, 3).map((country: any) => (
            <li
              key={country.cca3}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-150"
            >
              <h4 className="text-lg font-semibold text-white-900">
                {country.name.common}
              </h4>
            </li>
          ))
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
}
