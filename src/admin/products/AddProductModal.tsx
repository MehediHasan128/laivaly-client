import LForm from "@/components/form/LForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import AddImages from "./AddImages";
// import { useAddProductMutation } from "@/redux/features/product/productApi";
import LInput from "@/components/form/LInput";
import LTextArea from "@/components/form/LTextArea";
import LSelect from "@/components/form/LSelect";
import {
  groupOptions,
  ProductCategorySubCategoryMap,
  ProductGroupCategoryMap,
  targetAudienceOptions,
} from "@/constant";
import { toast } from "sonner";
import { TError, TResponce } from "@/types";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import Spinner from "@/components/ui/spinner";

const AddProductModal = ({ children, refetch }: { children: ReactNode; refetch: () => void }) => {
  const [images, setImages] = useState<File[]>([]);
  const [productGroup, setProductGroup] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState<string | null>(null);
  const [dialogClose, setDialodClose] = useState(false);

  //   Get product category
  const categories = ProductGroupCategoryMap[productGroup];
  const categoryOptions =
    (categories &&
      categories.map((category: string) => ({
        value: category,
        label: category.charAt(0).toUpperCase() + category.slice(1),
      }))) ||
    [];

  //   Get product sub category
  const subCategories = ProductCategorySubCategoryMap[productCategory];
  const subCategoryOptions =
    (subCategories &&
      subCategories.map((subCategory: string) => ({
        value: subCategory,
        label: subCategory.charAt(0).toUpperCase() + subCategory.slice(1),
      }))) ||
    [];

  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleAddProduct = async (data: FieldValues) => {
    const formData = new FormData();

    const {
      title,
      description,
      group,
      category,
      subCategory,
      targetAudience,
      price,
      discount,
      quantity,
      colors,
      sizes,
      SKU,
      weight,
    } = data;

    const productData = {
      title,
      description,
      group,
      category,
      subCategory,
      targetAudience,
      price: Number(price),
      discount: Number(discount),
      quantity: Number(quantity),
      colors,
      sizes,
      SKU: SKU.toUpperCase(),
      weight,
    };

    if (images) {
      images.forEach((image) => {
        formData.append("file", image);
      });
    }

    formData.append("data", JSON.stringify(productData));

    const toastId = toast.loading(null);
    try {
      const res = (await addProduct(formData).unwrap()) as TResponce;
      toast.success(res?.message, { id: toastId, duration: 3000 });
      refetch()
      setDialodClose(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <Dialog open={dialogClose} onOpenChange={setDialodClose}>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent className="xl:max-w-[50%]">
        <div>
          <h1 className="text-sm font-medium">Add Product</h1>

          <AddImages images={images} setImages={setImages} />

          <LForm onSubmit={handleAddProduct}>
            <div className="mb-5">
              <div className="grid grid-cols-4 gap-3">
                <LInput
                  type="text"
                  name="title"
                  placeholder="Enter product title"
                  icon={false}
                />
                <LSelect
                  name="group"
                  setValue={setProductGroup}
                  placeholder="Select product group"
                  options={groupOptions}
                  className="border w-full flex justify-between"
                />

                <LSelect
                  name="category"
                  setValue={setProductCategory}
                  placeholder="Select product Category"
                  options={categoryOptions}
                  className="border w-full flex justify-between"
                />
                <LSelect
                  name="subCategory"
                  placeholder="Select product sub-category"
                  options={subCategoryOptions}
                  className="border w-full flex justify-between"
                />
              </div>

              <div className="my-3">
                <LTextArea
                  name="description"
                  placeholder="Product description"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                <LSelect
                  name="targetAudience"
                  placeholder="Select target audience"
                  options={targetAudienceOptions}
                  className="border w-full flex justify-between"
                />
                <LInput
                  type="text"
                  name="price"
                  placeholder="Enter product price $"
                  icon={false}
                />
                <LInput
                  type="text"
                  name="discount"
                  placeholder="Enter product discount rate"
                  icon={false}
                />
                <LInput
                  type="text"
                  name="quantity"
                  placeholder="Enter product quantity"
                  icon={false}
                />
              </div>

              <div className="grid grid-cols-4 gap-3 my-3">
                <LInput
                  type="text"
                  name="colors"
                  placeholder="Enter product colors"
                  icon={false}
                  isArray
                />
                <LInput
                  type="text"
                  name="sizes"
                  placeholder="Enter product sizes"
                  icon={false}
                  isArray
                />
                <LInput
                  type="text"
                  name="SKU"
                  placeholder="Enter product code"
                  icon={false}
                />
                <LInput
                  type="text"
                  name="weight"
                  placeholder="Enter product weight"
                  icon={false}
                />
              </div>
            </div>

           
              <button
                type="submit"
                className="text-sm font-medium border border-gray-300 w-32 py-3 rounded-lg active:scale-95 transition transform duration-500 cursor-pointer bg-[#31473A] text-white"
              >
                {
                  isLoading ? <Spinner className="size-5" /> : "Add Product"
                }
              </button>
          </LForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
