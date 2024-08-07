import book1Front from "@/public/assets/images/books/book-1.jpg";
import book1Back from "@/public/assets/images/books/book-2.jpg";
import book2Front from "@/public/assets/images/books/book-3.jpg";
import book2Back from "@/public/assets/images/books/book-4.jpg";

export default function getBooks() {
  const books = [
    {
      id: crypto.randomUUID(),
      title: "Ognibina",
      thumbnail: book1Front,
      category: "Drama",
      authorName: "Kaji Nozrul Islam",
      regularPrice: 200,
      discountedPrice: 180,
      rating: 4,
      types: ["printed", "pdf", "audio"],
    },
    {
      id: crypto.randomUUID(),
      title: "Ognibina",
      thumbnail: book2Front,
      category: "Drama",
      authorName: "Kaji Nozrul Islam",
      regularPrice: 200,
      discountedPrice: null,
      rating: 4,
      types: ["printed", "audio"],
    },
    {
      id: crypto.randomUUID(),
      title: "ইংলিশে দুর্বলদের জন্য English Therapy",
      thumbnail: book1Back,
      category: "Drama",
      authorName: "Kaji Nozrul Islam",
      regularPrice: 200,
      discountedPrice: 180,
      rating: 3,
      types: ["printed", "pdf"],
    },
    {
      id: crypto.randomUUID(),
      title: "Ognibina",
      thumbnail: book2Back,
      category: "Drama",
      authorName: "Kaji Nozrul Islam",
      regularPrice: 200,
      discountedPrice: 180,
      rating: 4,
      types: ["pdf", "audio"],
    },
    {
      id: crypto.randomUUID(),
      title: "জার্মান ব্যাকরণ A1 থেকে B1 ( বাংলা ভার্সন )",
      thumbnail: book1Back,
      category: "Drama",
      authorName: "Kaji Nozrul Islam",
      regularPrice: 200,
      discountedPrice: 180,
      rating: 5,
      types: ["printed"],
    },
  ];
  return books;
}
