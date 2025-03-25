"use client";

import FilterDropdown from "./components/FilterDropdown";

// import SignupForm from "./components/SignupForm";

// import Button from "./components/Button";

// import SearchBar from "./components/SearchBar";


export default function Home() {

  // SearchBar handler

  // const handleSearch = (query) => {
  //   console.log("Search Query: ", query);
  // }
  

  // Filter handler

  const handleFilterSelect = (value) => {
    console.log("Selected filter: ", value);
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      
      <h1>Component Demo</h1>

      {/* Button Component */}
      {/* <Button label="Click Me!" onClick={() => alert("Button Clicked!")}/> */}

      {/* Search Bar Component */}
      {/* <SearchBar placeholder="Type to search..." onSearch={handleSearch} /> */}

      {/* Filter Dropdown Component */}
      <FilterDropdown 
        options={["All", "Completed", "Pending", "Archived"]}
        onSelect={handleFilterSelect}
      />









      {/* Form Validation Demo */}
      {/* <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <SignupForm /> */}

    </main>
  );
}
