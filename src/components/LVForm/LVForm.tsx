import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface TLVFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}

const LVForm = ({ children, onSubmit }: TLVFormProps) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

export default LVForm;
