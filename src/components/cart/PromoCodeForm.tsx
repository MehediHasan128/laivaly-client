"use client";

import React from "react";
import LVForm from "../LVForm/LVForm";
import LVInput from "../LVForm/LVInput";

const PromoCodeForm = () => {
  const handleSubmitForm = async () => {};

  return (
    <LVForm onSubmit={handleSubmitForm}>
      <div className="flex gap-3">
        <div className="w-full">
          <LVInput
            type="text"
            name="promoCode"
            placeholder="Enater Your Promo Code"
            className="text-sm"
          />
        </div>
        <button className="border rounded bg-black text-white font-semibold cursor-pointer active:scale-95 duration-500 px-8">Apply</button>
      </div>
    </LVForm>
  );
};

export default PromoCodeForm;
