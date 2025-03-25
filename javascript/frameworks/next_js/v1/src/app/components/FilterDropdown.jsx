import { useState } from "react";

export default function FilterDropdown({ options = [], onSelect }) {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <select
            value={selected}
            onChange={handleChange}
            className="w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <options value="">Select an option</options>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}