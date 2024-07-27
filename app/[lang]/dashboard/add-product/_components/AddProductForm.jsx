"use client";
import { Button } from "@/components/ui/button";
import ProductDetailsInputs from "./ProductDetailsInputs";
import ProductInfoInputs from "./ProductInfoInputs";
import SelectStatus from "./SelectStatus";
import SelectAuthor from "./SelectAuthor";
import SelectCategory from "./SelectCategory";
import { useState } from "react";
import UploadThumbnail from "./UploadThumbnail";
import UploadReadingPDF from "./UploadReadingPDF";
import ProductFormatsStyle1 from "./ProductFormatsStyle1";
import ProductFormatsStyle2 from "./ProductFormatsStyle2";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    stock_printedNewBook: "",
    regularPrice_printedNewBook: "",
    discountedPrice_printedNewBook: "",
    stock_printedOldBook: "",
    regularPrice_printedOldBook: "",
    discountedPrice_printedOldBook: "",
    regularPrice_ebook: "",
    discountedPrice_ebook: "",
    upload_ebook: "",
    regularPrice_audioBook: "",
    discountedPrice_audioBook: "",
    upload_audioBook: "",
    sku: "",
    edition: "",
    publisher: "",
    page: "",
    language: "",
    country: "",
    status: "",
    category: "",
    author: "",
    readingPDF: "",
    thumbnail: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-end mb-4">
        <Button type="submit" variant="themePrimary" size="sm">
          Upload Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid items-start gap-4 lg:col-span-2 lg:gap-8">
          <ProductDetailsInputs
            formData={formData}
            handleChange={handleChange}
          />
          <ProductFormatsStyle1
            className="hidden sm:block"
            formData={formData}
            handleChange={handleChange}
          />
          <ProductFormatsStyle2
            className="block sm:hidden"
            formData={formData}
            handleChange={handleChange}
          />
          <ProductInfoInputs formData={formData} handleChange={handleChange} />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <SelectStatus formData={formData} handleChange={handleChange} />
          <SelectCategory formData={formData} handleChange={handleChange} />
          <SelectAuthor formData={formData} handleChange={handleChange} />
          <UploadReadingPDF formData={formData} handleChange={handleChange} />
          <UploadThumbnail formData={formData} handleChange={handleChange} />
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
