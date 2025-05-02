import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const AddImages = ({
  images,
  setImages,
}: {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
}) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files).slice(0, 4 - images.length);
    const newImages = [...images, ...fileArray];
    const newPreviewUrl = [
      ...previewUrls,
      ...fileArray.map((file) => URL.createObjectURL(file)),
    ].slice(0, 4);

    setImages(newImages);
    setPreviewUrls(newPreviewUrl);

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

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div className="my-10">
      {/* Unified hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        ref={fileInputRef}
      />

      <div>
        {previewUrls.length > 0 ? (
          <div className="grid grid-cols-4 w-[50%] gap-2">
            {previewUrls.map((url, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden relative">
                <img src={url} alt={`Preview ${idx}`} />
                <div className="absolute top-2 right-2 bg-gray-50 rounded-full p-0.5 text-sm cursor-pointer">
                  <RxCross2 />
                </div>
              </div>
            ))}
            {images.length < 4 && (
              <div
                onClick={handleOpenFileDialog}
                className="border border-dashed rounded-lg border-blue-700 bg-blue-50 flex justify-center items-center cursor-pointer"
              >
                <div className="bg-blue-300 text-2xl p-1.5 rounded-full">
                  <IoMdAdd />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            onClick={handleOpenFileDialog}
            className="flex flex-col items-center justify-center w-[20%] h-40 border-2 border-dashed border-blue-400 rounded-xl cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-200"
          >
            <span className="text-blue-500 font-medium">
              Click to select images
            </span>
            <span className="text-sm text-gray-500">PNG, JPG up to 5MB</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddImages;
