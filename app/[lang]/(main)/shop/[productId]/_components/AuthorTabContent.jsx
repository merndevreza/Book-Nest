import SocialProfiles from "@/components/SocialProfiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"; 
import { BookOpen, Heart } from "lucide-react";
import Image from "next/image";
 
const AuthorTabContent = ({author}) => {
  const{firstName,lastName,avatar}=author?.userId;
  const {bio,about,totalBooks,totalBooksSold,socialLinks}=author;
  return (
    <Card className="px-4"> 
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
          <div className="space-y-3">
            <Image
              src={avatar}
              alt={`${firstName} ${lastName}`}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-full"
            />
            <SocialProfiles links={socialLinks} className="md:justify-center" />
          </div>
          <div>
            <CardTitle className="text-xl text-themePrimary">{`${firstName} ${lastName}`}</CardTitle>
            <p>English Play writer</p>
            {/* <p>{bio}</p> */}
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18}/>
                <p>Published Books: {totalBooks}</p>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={18}/>
                <p>Books sold: {totalBooksSold}+</p>
              </div> 
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator  className="h-[2px]"/>
      <CardContent className="space-y-2 mt-4">
         {about}
      </CardContent>
    </Card>
  );
};

export default AuthorTabContent;
