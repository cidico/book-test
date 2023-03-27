import { useState } from "react";

function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleSearchTermChange = (event) => {
    props.onSearchTermChange(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSearchFieldChange = (event) => {
    props.onSearchTypeChange(event.target.value);
    setSearchField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm, searchField);
  };

  const options = [
    { value: "", label: "Select" },
    { value: "Title", label: "Title" },
    { value: "FirstName", label: "FirstName" },
    { value: "LastName", label: "LastName" },
    { value: "TotalCopies", label: "Available Copies" },
    { value: "CopiesInUse", label: "Copies In Use" },
    { value: "Type", label: "Type" },
    { value: "ISBN", label: "ISBN" },
    { value: "Category", label: "Category" },
  ];

  return (
    <div className="mt mt-5 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md lg:w-1/2"
      >
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="search"
          >
            Search by
          </label>
          <select
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="dropdown"
            onChange={handleSearchFieldChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="dropdown"
          >
            Search value
          </label>
          <div className="relative">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="search"
              type="text"
              placeholder="Enter your search value"
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
        <button
          className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
