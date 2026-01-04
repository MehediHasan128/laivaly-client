"use client";

import { CloudUpload } from "lucide-react";
import { Label } from "../ui/label";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { uploadProfilePicture } from "@/lib/api/user/user";
import { TError, TResponce } from "@/types/types";
import { useRouter } from "next/navigation";

const ProfileUploader = ({
  defaultImageURL,
}: {
  defaultImageURL: string | null;
}) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState<string | null>(defaultImageURL);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    const path = URL.createObjectURL(file);
    setImagePath(path);
  };

  const handleImageUpload = async () => {
    if (!uploadedFile) return;
    const formData = new FormData();
    formData.append("file", uploadedFile);

    const toastId = toast.loading("Loading");
    try {
      const res = (await uploadProfilePicture(formData)) as TResponce;
      toast.success(res?.message, { id: toastId });
      router.refresh();
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <div>
      {!imagePath && (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative size-52 border border-dashed border-black rounded-lg cursor-pointer hover:border-blue-600 duration-500"
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="absolute top-0 rounded-lg size-full flex justify-center items-center">
            <div className="text-center space-y-1">
              <CloudUpload className="size-10 mx-auto" />
              <Label>Upload Profile Image</Label>
            </div>
          </div>
        </div>
      )}
      {imagePath && (
        <div>
          <div className="relative size-52 rounded-lg overflow-hidden">
            <Image
              src={imagePath}
              alt=""
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-52 mt-2 flex gap-2">
            <button className="btn py-1.5 bg-white border text-black">
              Edit
            </button>
            <button onClick={handleImageUpload} className="btn py-1.5">Upload</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUploader;
