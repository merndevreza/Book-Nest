"use client";
import { useRef, useState } from "react";

const AddProductFormBlob = () => {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const file = inputFileRef.current.files?.[0];
      const response = await fetch(`/api/upload-blob?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = await response.json();

      setBlob(newBlob);
      if (!res.ok) throw new Error(await res.text());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="file" ref={inputFileRef} type="file" required />
        <input type="submit" value="submit" />
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
};

export default AddProductFormBlob;
