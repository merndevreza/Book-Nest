"use client";
import { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import Typewriter from "typewriter-effect/dist/core";
import { Search as SearchIconMain } from "lucide-react"; 
import { Button } from "./ui/button";

const Search = ({className,dictionary}) => {
  const inputRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    // Add character
    const customNodeCreator = function (character) {
      if (input) {
        input.placeholder += character;
      }
      return null;
    };
    // Remove character
    const onRemoveNode = function () {
      if (input && input.placeholder) {
        input.placeholder = input.placeholder.slice(0, -1);
      }
    };

    const initializeTypewriter = () => {
      typewriterRef.current = new Typewriter(null, {
        loop: true,
        delay: 75,
        onCreateTextNode: customNodeCreator,
        onRemoveNode: onRemoveNode,
      });

      typewriterRef.current
        .typeString(dictionary?.searchPlaceholder1)
        .pauseFor(1000)
        .deleteAll()
        .typeString(dictionary?.searchPlaceholder2)
        .pauseFor(1000)
        .deleteAll()
        .start();
    };

    initializeTypewriter();

    const handleFocus = () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
    };

    const handleBlur = () => {
      if (typewriterRef.current) {
        typewriterRef.current.start();
      }
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <form action="" className={className} >
      <div className="flex justify-center items-center border-2 border-themePrimary  rounded-md">  
        <Input
          ref={inputRef}
          type="search"
          className="bg-secondary focus-visible:ring-offset-0  focus-visible:ring-transparent rounded " 
        />

        <Button type="submit" className=" w-20 bg-themePrimary text-themePrimary-foreground rounded-none border-none hover:bg-theme hidden md:block">
        <SearchIconMain className="mx-auto"  size={20}/>
        </Button> 
      </div>
    </form>
  );
};

export default Search;
