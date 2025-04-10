import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
    type: string;
    name: string;
    placeholder: string;
    icon: boolean;
    className?: string;
}

const LInput = ({type, name, placeholder, icon, className}: TInputProps) => {
    return (
        <>
           <Controller name={name}
            render={({field}) => (
                <Input {...field} type={type} name={name} placeholder={placeholder} icon={icon} className={className} />
            )}
           /> 
        </>
    );
};

export default LInput;