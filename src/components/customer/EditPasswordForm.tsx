import React from "react";
import { FieldValues } from "react-hook-form";
import LVForm from "../LVForm/LVForm";
import { Label } from "../ui/label";
import LVInput from "../LVForm/LVInput";

const EditPasswordForm = () => {
  const handleUpdateUserPassword = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <LVForm onSubmit={handleUpdateUserPassword}>
      <div className="space-y-3">
        <div className="space-y-2">
            <Label>Current Password</Label>
            <LVInput type="password" name="oldPassword" placeholder="Enter your current password" />
        </div>
        <div className="space-y-2">
            <Label>New Password</Label>
            <LVInput type="password" name="newPassword" placeholder="Enter a new password" />
        </div>
        <div className="space-y-2">
            <Label>Confirm new Password</Label>
            <LVInput type="password" name="confirmPassword" placeholder="Confirm your new password" />
        </div>
        <div>
            <button className="btn py-3 hover:underline mt-5">confirm</button>
        </div>
      </div>
    </LVForm>
  );
};

export default EditPasswordForm;
