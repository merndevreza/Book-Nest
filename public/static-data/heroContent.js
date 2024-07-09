import banner1 from "@/public/assets/images/banners/banner-1.png";
import banner2 from "@/public/assets/images/banners/banner-3.png";
import banner3 from "@/public/assets/images/banners/banner-2.png";
export default function getHeroContent(dictionary) {
  const banners = [
    {
      id: crypto.randomUUID(),
      src: banner1,
      title: dictionary?.slide1Title,
      subtitle: dictionary?.slide1SubTitle,
      path: "shop",
    },
    {
      id: crypto.randomUUID(),
      src: banner2,
      title: dictionary?.slide2Title,
      subtitle: dictionary?.slide2SubTitle,
      path: "shop",
    },
    {
      id: crypto.randomUUID(),
      src: banner3,
      title: dictionary?.slide3Title,
      subtitle: dictionary?.slide3SubTitle,
      path: "shop",
    },
  ];

  return banners;
}
