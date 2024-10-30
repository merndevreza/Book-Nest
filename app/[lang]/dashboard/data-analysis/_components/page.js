"use client";
import { Card } from "@/components/ui/card";
import { parse } from "csv-parse";
import { useEffect, useState } from "react";

const Page = () => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the CSV file content
        const response = await fetch(
          "https://gyqsjwvpydv7dr9h.public.blob.vercel-storage.com/generated-w0ppkYemuDFxybYy61HH2jgmxkmXyN.csv"
        );
        const csvData = await response.text();

        // Parse the CSV data
        parse(
          csvData,
          {
            columns: true, // If you want the headers as object keys
            trim: true,
          },
          (err, records) => {
            if (err) {
              console.error("Error parsing CSV:", err);
            } else {
              console.log("Parsed records:", records);
              setParsedData(records);
            }
          }
        );
      } catch (error) {
        console.error("Error fetching the CSV file:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("file");
    console.log(file);
  };
  return (
    <div>
      <h1 className="text-center py-4 text-lg">
        Data Analysis tools (Testing)
      </h1>
      <Card className="p-4">
        <h4>Upload file</h4>
        <form onSubmit={handleSubmit}>
          <input name="file" type="file" required />
          <input
            className="bg-themePrimary px-3 py-1 rounded"
            type="submit"
            value="Upload"
          />
        </form>
        {parsedData.length > 0 && (
          <div>
            <h4>Parsed Data:</h4>
            <pre>{JSON.stringify(parsedData, null, 2)}</pre>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Page;
