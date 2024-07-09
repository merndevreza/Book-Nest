import SocialProfiles from "@/components/SocialProfiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import user1 from "@/public/assets/images/author.png";
import { BookOpen, Heart } from "lucide-react";
import Image from "next/image";
const author = {
  name: "Victor Voyager",
  thumbnail: user1,
  bio: "English playwright, poet and actor",
  totalBooks: "30",
  totalBooksSold: "120",
  email: "rezaulkarimpstu@gmail.com",
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    linkedIn: "https://www.linkedin.com/in/webdevreza/",
  },
  aboutAuthorBriefly:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore minus deleniti amet accusantium placeat? Dicta fuga a obcaecati ducimus natus recusandae. Maiores eligendi unde nihil maxime placeat magnam, odit vitae?"
};
const AuthorTabContent = () => {
  return (
    <Card className="px-4"> 
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
          <div className="space-y-3">
            <Image
              src={author?.thumbnail}
              alt={author?.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <SocialProfiles links={author?.social} className="md:justify-center" />
          </div>
          <div>
            <CardTitle className="text-xl text-themePrimary">{author?.name}</CardTitle>
            <p>{author?.bio}</p>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18}/>
                <p>Published Books: {author?.totalBooks}</p>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={18}/>
                <p>Books sold: {author?.totalBooksSold}+</p>
              </div> 
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator  className="h-[2px]"/>
      <CardContent className="space-y-2 mt-4">
         {author?.aboutAuthorBriefly}
      </CardContent>
    </Card>
  );
};

export default AuthorTabContent;
