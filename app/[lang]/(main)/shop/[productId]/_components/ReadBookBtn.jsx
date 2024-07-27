"use client"

import { Button } from "@/components/ui/button";

const ReadBookBtn = ({readingPDF,dictionary}) => {
   return (
      <Button variant="themePrimary" className="hover:before:dark:bg-themeSecondary" >
        {dictionary?.startReading}
      </Button>
   );
};

export default ReadBookBtn;