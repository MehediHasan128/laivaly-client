import React, { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className='max-w-[95%] mx-auto p-5 my-5'>
            {children}
        </div>
    );
};

export default Container;