import { Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type TInputProps = {
  name: string;
  radioOptions: {
    id: string;
    lable: string;
  }[];
  defaultValue?: string
};

const LRadio = ({ name, radioOptions, defaultValue }: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <RadioGroup {...field} name={name} className="flex" defaultValue={defaultValue}>
            {radioOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <RadioGroupItem value={option.lable} id={option.id} />
                <Label htmlFor={option.id}>{option.lable}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </>
  );
};

export default LRadio;
