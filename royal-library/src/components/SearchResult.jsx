import React, { useState } from "react";

const SearchResult = ({ books }) => {
  if (books.length === 0) {
    return (
      <div className="mt mt-5 flex flex-col items-center">
        <p>No records found.</p>
      </div>
    );
  }

  return (
    <div className="m-7 flex justify-center">
      <table className="mx-auto w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3 text-left">Book Title</th>
            <th className="py-2 px-3 text-left">First Name</th>
            <th className="py-2 px-3 text-left">Last Name</th>
            <th className="py-2 px-3 text-left">Type</th>
            <th className="py-2 px-3 text-left">ISBN</th>
            <th className="py-2 px-3 text-left">Category</th>
            <th className="py-2 px-3 text-left">Available Copies</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book.isbn}
              className="cursor-pointer bg-white transition duration-300 hover:bg-gray-50"
            >
              <td className="border py-2 px-3">{book.title}</td>
              <td className="border py-2 px-3">{book.firstName}</td>
              <td className="border py-2 px-3">{book.lastName}</td>
              <td className="border py-2 px-3">{book.type}</td>
              <td className="border py-2 px-3">{book.isbn}</td>
              <td className="border py-2 px-3">{book.category}</td>
              <td className="border py-2 px-3">
                {book.copiesInUse} / {book.totalCopies}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
