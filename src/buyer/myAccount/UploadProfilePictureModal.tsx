import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Spinner from "@/components/ui/spinner";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useAddBuyerprofileMutation } from "@/redux/features/buyer/buyerApi";
import { useAppSelector } from "@/redux/hook";
import { TError, TResponce } from "@/types";
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "sonner";

const UploadProfilePictureModal = ({
  children,
  refetch,
}: {
  children: ReactNode;
  refetch: () => void;
}) => {
  const [dialogClose, setDialodClose] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [image, setImage] = useState<File | undefined>(undefined);

  const [addBuyerprofile, { isLoading }] = useAddBuyerprofileMutation();
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);
    const url = URL.createObjectURL(file as File);
    setUrl(url);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleOpenFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const handleUploadImage = async () => {
    const formData = new FormData();

    if (image) {
      formData.append("file", image);
    }

    const toastId = toast.loading(null);
    try {
      const res = (await addBuyerprofile([
        formData,
        userId,
      ]).unwrap()) as TResponce;
      toast.success(res?.message, { id: toastId, duration: 3000 });
      refetch();
      setDialodClose(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
      console.log(error);
    }
  };

  return (
    <Dialog open={dialogClose} onOpenChange={setDialodClose}>
      <DialogTrigger asChild>
        <button className="border p-2 w-fit rounded-full  bg-white text-xl absolute bottom-5 right-8 cursor-pointer text-blue-500">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          {url === undefined ? (
            <div
              onClick={handleOpenFileDialog}
              className="border border-dashed border-blue-500 h-96 rounded-xl flex justify-center items-center cursor-pointer"
            >
              <div className="space-y-3 text-center">
                <IoCloudUploadOutline className="text-4xl w-fit mx-auto" />
                <h1 className="text-xl font-semibold">
                  Choose an image or drag & drop it here
                </h1>
                <p className="font-medium text-gray-600">
                  JPEG, PNG & JPG formats, up to 50MB
                </p>
                <button
                  onClick={handleOpenFileDialog}
                  className="border px-5 py-2 mt-2 rounded-md font-medium cursor-pointer"
                >
                  Browse Image
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={handleOpenFileDialog}
              className="border border-dashed border-blue-500 h-[550px] rounded-xl flex justify-center items-center cursor-pointer overflow-hidden p-5"
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                src={url}
                alt=""
              />
            </div>
          )}

          {url !== undefined && (
            <button
              onClick={handleUploadImage}
              className="border px-5 py-2 cursor-pointer mt-5 rounded-md font-medium"
            >
              {isLoading ? <Spinner /> : "Upload"}
            </button>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadProfilePictureModal;
