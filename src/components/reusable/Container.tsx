import React, { ReactNode } from 'react';

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className='md:max-w-[95%] mx-auto p-3 md:py-10 lg:py-20'>
            {children}
        </div>
    );
};

export default Container;