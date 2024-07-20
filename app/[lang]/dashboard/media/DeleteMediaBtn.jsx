"use client";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteMediaBtn = ({ url }) => {
  const router = useRouter();
  console.log(url);
  const handleDelete = async () => {
    await fetch("/api/upload-blob", {
      method: "DELETE",
      body: JSON.stringify({
        url,
      }),
    });
    router.refresh();
  };
  return (
    <Button
      onClick={handleDelete}
      className="bg-transparent hover:bg-secondary text-destructive border-2 rounded-full border-destructive w-9 h-9 flex place-content-center"
    >
      <span>
        <Trash2 size={20} />
      </span>
    </Button>
  );
};

export default DeleteMediaBtn;
