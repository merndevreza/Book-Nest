"use client"

import { Button } from "@/components/ui/button";

const ReadBookBtn = () => {
   return (
      <Button variant="themePrimary" className="hover:before:dark:bg-themeSecondary" >
         Start Reading
      </Button>
   );
};

export default ReadBookBtn;