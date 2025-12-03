"use client";

import LVForm from "@/components/LVForm/LVForm";
import LVInput from "@/components/LVForm/LVInput";
import LVSelect from "@/components/LVForm/LVSelect";
import LVTextArea from "@/components/LVForm/LVTextArea";
import { Label } from "@/components/ui/label";
import {
  Category,
  productForOptions,
  productGroupOtions,
  seasonOptions,
  subCategory,
} from "@/data/productData";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const AddProductForm = () => {
  const [group, setGroup] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const productCategoryOptions = group ? Category[group] : [];
  const productSubCategoryOptions = category ? subCategory[category] : [];

  const handleAddProduct = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <main>
      <LVForm onSubmit={handleAddProduct}>
        <div className="space-y-2">
          <div className="flex gap-5 my-10 items-center">
            <div className="border-b-2 w-full" />
            <Label className="text-lg font-bold whitespace-nowrap">
              Product Details
            </Label>
            <div className="border-b-2 w-full" />
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-2">
            <LVInput
              type="text"
              name="title"
              placeholder="Enter product title"
              label="Title"
              required
            />
            <LVSelect
              name="productGroup"
              placeholder="Select season"
              options={productGroupOtions}
              label="Product Group"
              setInputValue={setGroup}
              required
            />
            <LVSelect
              name="productFor"
              placeholder="Choose Audience (Men/Women/Kids)"
              options={productForOptions}
              label="Product For"
              required
            />
            <LVSelect
              name="productCategory"
              placeholder="Select product category"
              options={productCategoryOptions}
              label="Product Category"
              setInputValue={setCategory}
              disabled={productCategoryOptions.length > 0 ? false : true}
              required
            />
            <LVSelect
              name="productSubCategory"
              placeholder="Select product sub category"
              options={productSubCategoryOptions}
              label="Product SubCategory"
              disabled={productSubCategoryOptions.length > 0 ? false : true}
              required
            />
            <LVSelect
              name="season"
              placeholder="Select season"
              options={seasonOptions}
              label="Season"
              required={["cloth", "footwear"].includes(group as string)}
            />
          </div>

          <div className="flex gap-5 my-10 items-center">
            <div className="border-b-2 w-full" />
            <Label className="text-lg font-bold whitespace-nowrap">
              Product Description
            </Label>
            <div className="border-b-2 w-full" />
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            <LVTextArea
              name="description.shortDescription"
              placeholder="Write a short description of the product"
              label="Short Description"
              required
            />

            <LVTextArea
              name="description.longDescription"
              placeholder="Write a long description of the product"
              label="Long Description"
              required
            />

            <LVInput
              type="text"
              name="description.material"
              placeholder="Enter product materials (e.g., Cotton, Leather, Polyester)"
              label="Material"
              required
            />

            <LVInput
              type="text"
              name="description.careInstructions"
              placeholder="Enter care instructions for the product"
              label="Care Instructions"
            />

            <LVInput
              type="text"
              name="description.features"
              placeholder="Enter key features of the product"
              label="Features"
            />

            <LVInput
              type="number"
              name="description.productWeight"
              placeholder="Enter product weight in grams"
              label="Product Weight"
              required
            />
          </div>

          <div className="flex gap-5 my-10 items-center">
            <div className="border-b-2 w-full" />
            <Label className="text-lg font-bold whitespace-nowrap">
              Product Pricing
            </Label>
            <div className="border-b-2 w-full" />
          </div>

          <div className="grid grid-cols-3 gap-x-5 gap-y-2">
            <LVInput
              type="number"
              name="price"
              placeholder="Enter product price"
              label="Price"
              required
            />
            <LVInput
              type="number"
              name="discount"
              placeholder="Enter discount value"
              label="Discount"
              required
            />
            <LVInput
              type="number"
              name="perUnitCost"
              placeholder="Enter per unit cost"
              label="Per Unit Cost"
              required
            />
          </div>

          <button className="btn mt-10">Add Product</button>
        </div>
      </LVForm>
    </main>
  );
};

export default AddProductForm;
