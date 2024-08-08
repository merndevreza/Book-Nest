"use client";
import BookCardVertical from "@/components/BookCard/BookCardVertical";
import { useState } from "react";

const WishlistProductsList = ({ products, session }) => {
  const [books, setBooks] = useState(products);

  return (
    <div className="space-y-3">
      {books.map((book) => (
        <BookCardVertical
          setBooks={setBooks}
          key={book.id}
          isLoggedIn={session ? true : false}
          userId={session?.user.id}
          book={book}
        />
      ))}
    </div>
  );
};

export default WishlistProductsList;
