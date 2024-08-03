
import banner1 from "@/public/assets/images/banners/cta-1.png";
import banner2 from "@/public/assets/images/banners/cta-2.png";
import banner3 from "@/public/assets/images/banners/cta-3.png";

export default function getCTAContent(dictionary){
   const content = [
      {
        id: crypto.randomUUID(),
        src: banner1,
        title: dictionary?.ctaBanner1Title,
        subtitle: dictionary?.ctaBanner1SubTitle,
        path: "shop",
        buttonTitle: dictionary?.learnMore,
      },
      {
        id: crypto.randomUUID(),
        src: banner2,
        title: dictionary?.ctaBanner2Title,
        subtitle: dictionary?.ctaBanner2SubTitle,
        buttonTitle: dictionary?.bookNow,
        path: "shop",
      },
      {
        id: crypto.randomUUID(),
        src: banner3,
        title: dictionary?.ctaBanner3Title,
        subtitle: dictionary?.ctaBanner3SubTitle,
        buttonTitle: dictionary?.contactUs,
        path: "shop",
      },
    ];
    return content;
}