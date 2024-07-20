"use client";
import { useState } from "react";

const AddProductForm = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddProductForm;
