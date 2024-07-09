
import printedBooks from "@/public/assets/images/book-types/printed-book-front.png";
import ebooks from "@/public/assets/images/book-types/ebook-front.png";
import audioBooks from "@/public/assets/images/book-types/audiobook-front.png"; 


export default function getBookFormatsContent(dictionary){
   const formats = [
      {
        id: 1,
        title: dictionary?.type1Title,
        subTitle: dictionary?.type1SubTitle,
        thumbnail: printedBooks,
        path: "shop",
      },
      {
        id: 2,
        title: dictionary?.type2Title,
        subTitle: dictionary?.type2SubTitle,
        thumbnail: ebooks,
        path: "shop",
      },
      {
        id: 3,
        title: dictionary?.type3Title,
        subTitle: dictionary?.type3SubTitle,
        thumbnail: audioBooks,
        path: "shop",
      },
    ];
    return formats;
}