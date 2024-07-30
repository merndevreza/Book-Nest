"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import Typewriter from "typewriter-effect/dist/core";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/app/hooks/useDebounce";

const Search = ({ lang, className, dictionary }) => {
  const inputRef = useRef(null);
  const typewriterRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const doSearch = useDebounce((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", term);

    router.replace(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/shop?${params.toString()}`
    );

    setSearchTerm("");
  }, 500);
  
  //typewriter-effect (package)
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
        .typeString(dictionary?.searchPlaceholder3)
        .pauseFor(1000)
        .deleteAll()
        .start();
    };
  
    initializeTypewriter();
  
    const handleFocus = () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
      if (input) {
        input.placeholder = "";  
      }
    };
  
    const handleBlur = () => {
      if (typewriterRef.current) {
        typewriterRef.current.stop();
      }
      initializeTypewriter();  
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
  //Search
  const handleSearch = (e) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);
    doSearch(value);
  };
  return (
    <form className={className}>
      <Input
        ref={inputRef}
        type="search"
        name="search"
        value={searchTerm}
        onChange={handleSearch}
        className="bg-secondary focus-visible:ring-offset-0  focus-visible:ring-transparent rounded-md border-2 border-themePrimary h-11"
      />
    </form>
  );
};

export default Search;
