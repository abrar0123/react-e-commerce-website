import React from "react";
import ProductWithCategory from "../../components/Products/productsWithCategory";
import Postheader from "../../components/Layout/postheader/postheader";
export default function catagories() {
  return (
    <React.Fragment>
      <Postheader />
      <ProductWithCategory />
    </React.Fragment>
  );
}
