import { useState } from "react";

export default function SearchBar({ placeholder = "Search ...", onSearch }) {
    const [query, setQuery] = usestate("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}