import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className="w-[95%] lg:w-[90%] mx-auto">
            {children}
        </div>
    );
};

export default Container;