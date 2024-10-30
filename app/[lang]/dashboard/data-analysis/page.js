"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { parse } from "csv-parse";
import * as XLSX from "xlsx";
import MUIReactTable from "./_components/MUIReactTable"; 

const Page = () => {
  const [parsedData, setParsedData] = useState([]);
  const [parsedAllSheets, setParsedAllSheets] = useState({});

  const handleSubmitCSV = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("file");

    if (file) {
      const reader = new FileReader();
      // Read the file content
      reader.onload = function (event) {
        const csvData = event.target.result;

        // Parse the CSV data
        parse(
          csvData,
          {
            columns: true, // If you want headers as object keys
            trim: true,
          },
          (err, records) => {
            if (err) {
              console.error("Error parsing CSV:", err);
            } else {
              console.log("Parsed records:", records);
              setParsedData(records); // Set the parsed data to state
            }
          }
        );
      };

      // Read the file as text
      reader.readAsText(file);
    }
    // Upload to Blob storage
    if (file) {
      try {
        const response = await fetch(`/api/upload-blob?filename=${file.name}`, {
          method: "POST",
          body: file,
        });
        if (!response.ok) throw new Error(await response.text());
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmitXLSX = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("file");

    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const allParsedData = {};

        // Loop through each sheet in the workbook
        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];

          // Convert the worksheet to JSON with headers as keys (first row as headers)
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          // Map array of arrays to array of objects
          const headers = jsonData[0]; // First row as headers
          const rows = jsonData.slice(1); // Remaining rows are data

          const sheetData = rows.map((row) =>
            headers.reduce((acc, header, i) => {
              acc[header] = row[i] || null; // Fill missing values with null
              return acc;
            }, {})
          );

          // Store the parsed data of the sheet
          allParsedData[sheetName] = sheetData;
        });

        console.log("Parsed XLSX data:", allParsedData);
        setParsedAllSheets(allParsedData); // Set the parsed data to state
      };

      reader.readAsArrayBuffer(file); // Read the file as binary string
    }

    // Upload to Blob storage
    if (file) {
      try {
        const response = await fetch(`/api/upload-blob?filename=${file.name}`, {
          method: "POST",
          body: file,
        });
        if (!response.ok) throw new Error(await response.text());
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-center py-4 text-lg">
        Data Analysis tools (Testing)
      </h1>
      <div className="flex gap-3">
        <Card className="p-4 w-full">
          <h4>Upload CSV file</h4>
          <form onSubmit={handleSubmitCSV}>
            <input name="file" type="file" accept=".csv" required />
            <input
              className="bg-themePrimary px-3 py-1 rounded"
              type="submit"
              value="Upload"
            />
          </form>
        </Card>
        <Card className="p-4 w-full">
          <h4>Upload XLSX file</h4>
          <form onSubmit={handleSubmitXLSX}>
            <input name="file" type="file" accept=".xlsx" required />
            <input
              className="bg-themePrimary px-3 py-1 rounded"
              type="submit"
              value="Upload"
            />
          </form>
        </Card>
      </div>
      <div>
        {parsedData.length > 0 && (
          <div>
            <h4>Parsed Data:</h4>
            <pre>{JSON.stringify(parsedData, null, 2)}</pre>
          </div>
        )}
      </div>
      <div >
        {parsedAllSheets && Object.keys(parsedAllSheets).length > 0 && (
          <div>
            <h4 className="mt-4">Parsed Data:</h4>
            {Object.keys(parsedAllSheets).map((sheetName, idx) => (
              <div key={idx} className="mt-4">
                <h5>{sheetName}</h5>
                <table className="table-auto border-collapse border border-gray-400">
                  <thead>
                    <tr>
                      {Object.keys(parsedAllSheets[sheetName][0] || {}).map(
                        (header, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 px-4 py-2"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {parsedAllSheets[sheetName].map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.values(row).map((value, colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-gray-300 px-4 py-2"
                          >
                            {value !== null ? value : "N/A"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
      <MUIReactTable/>  
    </div>
  );
};

export default Page;
