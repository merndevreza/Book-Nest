import AudioBookCard from "./_components/AudioBookCard";
import { getDictionary } from "@/app/[lang]/dictionary/dictionary";
import getBooks from "@/public/static-data/books";
const ebooks =  getBooks()
const AudioBooksPage = async({params:{lang}}) => {
  const dictionary=await getDictionary(lang)
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {ebooks.map((book) => (
        <AudioBookCard key={book?.id} book={book} dictionary={dictionary} />
      ))}
    </div>
  );
};

export default AudioBooksPage;

 
