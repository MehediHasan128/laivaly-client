import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
    type: string;
    name: string;
    placeholder: string;
    icon: boolean
}

const LInput = ({type, name, placeholder, icon}: TInputProps) => {
    return (
        <>
           <Controller name={name}
            render={({field}) => (
                <Input {...field} type={type} name={name} placeholder={placeholder} icon={icon}/>
            )}
           /> 
        </>
    );
};

export default LInput;