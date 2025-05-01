import LForm from "@/components/form/LForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import AddImages from "./AddImages";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import LInput from "@/components/form/LInput";
import LTextArea from "@/components/form/LTextArea";

const AddProductModal = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<File[]>([]);

  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (data: FieldValues) => {

    const formData = new FormData();
    if(images){
        images.forEach((image) => {
            formData.append('file', image)
        })
    };

    addProduct(formData)

  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="xl:max-w-[80%]">
        <div>
          <h1 className="text-sm font-medium">Add Product</h1>

          <AddImages images={images} setImages={setImages} />

          <LForm onSubmit={handleAddProduct}>

            <div className="mb-5"> 
                <div className="grid grid-cols-4 gap-3 mb-3">
                <LInput type="text" name="title" placeholder="Enter product title" icon={false} />
                <LInput type="text" name="title" placeholder="Enter product title" icon={false} />
                <LInput type="text" name="title" placeholder="Enter product title" icon={false} />
                <LInput type="text" name="title" placeholder="Enter product title" icon={false} />
                </div>

                <LTextArea name="description" placeholder="Product description" />
            </div>

            <button type="submit" className="text-sm font-medium border border-gray-300 px-5 py-3 rounded-lg active:scale-95 transition transform duration-500 cursor-pointer">
              Add Product
            </button>
          </LForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
