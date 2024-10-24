import React, { Suspense } from "react";
import { Products } from "@/views/products/products";

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <Products />
    </Suspense>
  );
};

export default ProductsPage;
