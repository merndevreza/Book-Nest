import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  if (filename && request.body) {
    const blob = await put(filename, request.body, {
      access: "public",
    }); 
    return NextResponse.json(blob);
  } else {
    return NextResponse.json({ message: "No file name is detected" });
  }
}


export async function DELETE(request){
  const json=await request.json();
  await del(json.url) 
  return NextResponse.json({})
}