import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResult from "./components/SearchResult";

function App() {
  const backendUrl = "http://localhost:5000/books";

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${backendUrl}?field=${searchType}&value=${searchTerm}`
      );

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
      setBooks([]);
    }
  };

  return (
    <>
      <SearchBox
        onSearch={handleSearch}
        onSearchTermChange={setSearchTerm}
        onSearchTypeChange={setSearchType}
      />

      <SearchResult books={books} />
    </>
  );
}

export default App;
