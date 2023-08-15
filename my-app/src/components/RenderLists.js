import React from "react";
import Book from "./Book";

function RenderLists() {
  const books = [
    {
      title: "Title 1",
      author: "Author 1",
      pages: 250,
    },
    {
      title: "Title 2",
      author: "Author 2",
      pages: 250,
    },
    {
      title: "Title 3",
      author: "Author 3",
      pages: 250,
    },
  ];
  return (
    <div>
      {books.map((book) => {
        return <Book key={book.title} book={book} />;
      })}
    </div>
  );
}

export default RenderLists;
