"use client"

import { smoochsans } from '@/styles/font';
import Image from 'next/image';
import React from 'react';

const LogoWithTitle = () => {
    return (
        <div className='flex items-center gap-2'>
           <div className='relative size-8 md:size-10'>
            <Image src="/images/logo/logo.png" alt='logo' fill quality={100} />
            </div> 
            <h1 className={`${smoochsans.className} text-3xl md:text-3xl font-bold`}>Laivaly</h1>
        </div>
    );
};

export default LogoWithTitle;