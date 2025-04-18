import { ReactNode } from "react";

type TUserPaths = {
    title: string;
    path?: string;
    element: ReactNode;
    icon: ReactNode;
};

type TPaths = {
    key: string;
    title: string;
    path: string;
    icon: ReactNode;
}


export const generateUserPaths = (items: TUserPaths[]) => {
    const userPaths = items.reduce((acc: TPaths[], item) => {
        if(item.title && item.path){
            acc.push({
                key: item.title,
                title: item.title,
                path: item.path,
                icon: item.icon
            })
        }

        return acc;
    }, []);
    return userPaths;
}