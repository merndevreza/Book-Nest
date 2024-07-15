import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file") || null;
  
  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded." });
  }

  // Check if the file type is PDF
  if (file.type !== "application/pdf") {
    return NextResponse.json({ success: false, message: "Only PDF files are allowed." });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Use the environment variable for the file upload path
  const uploadPath = process.env.FILE_UPLOAD_PATH;
  const path = join(uploadPath, file.name);
  await writeFile(path, buffer);
  console.log(`Open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true });
}
