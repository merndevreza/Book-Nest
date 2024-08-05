
import printedBooks from "@/public/assets/images/banners/printed-book-front.png";
import ebooks from "@/public/assets/images/banners/ebook-front.png";
import audioBooks from "@/public/assets/images/banners/audiobook-front.png"; 


export default function getBookFormatsContent(dictionary){
   const formats = [
      {
        id: 1,
        title: dictionary?.type1Title,
        subTitle: dictionary?.type1SubTitle,
        thumbnail: printedBooks,
        path: "/shop?format=printedBook",
      },
      {
        id: 2,
        title: dictionary?.type2Title,
        subTitle: dictionary?.type2SubTitle,
        thumbnail: ebooks,
        path: "/shop?format=ebook",
      },
      {
        id: 3,
        title: dictionary?.type3Title,
        subTitle: dictionary?.type3SubTitle,
        thumbnail: audioBooks,
        path: "/shop?format=audioBook",
      },
    ];
    return formats;
}