

import book1Front from "@/public/assets/images/books/img-01.jpg";
import book1Back from "@/public/assets/images/books/img-02.jpg";
import book2Front from "@/public/assets/images/books/img-03.jpg";
import book2Back from "@/public/assets/images/books/img-04.jpg";
import AudioBookCard from "./_components/AudioBookCard";
const ebooks = [
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
const AudioBooksPage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {ebooks.map((book) => (
        <AudioBookCard key={book?.id} book={book} />
      ))}
    </div>
  );
};

export default AudioBooksPage;

 
