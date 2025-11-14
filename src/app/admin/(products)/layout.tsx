import ProductsNav from '@/components/admin/products/ProductsNav';
import React, { ReactNode } from 'react';

const ProductsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <ProductsNav />
            {children}
        </div>
    );
};

export default ProductsLayout;