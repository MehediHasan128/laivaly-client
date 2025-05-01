import { Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type TInputProps = {
  name: string;
  placeholder: string;
};

const LTextArea = ({
    name,
    placeholder,
  }: TInputProps) => {
    return (
        <>
      <Controller
        name={name}
        render={({ field }) => (
          <Textarea {...field} name={name} placeholder={placeholder}/>
        )}
      />
    </>
    );
};

export default LTextArea;