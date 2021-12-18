import React from "react";
import { AdminLayout } from "../../../layouts";
import { Table, Product } from "../../../components";
import "../../../styles/pages/Product.sass";
import { dataProducts } from "../../../data/dataProducts";
const  data = dataProducts
const titles = ["Product ID", "Name", "Category", "Brand"];

const Products = () => {

  return (
    <AdminLayout>
      <div className="products">
        <div className="products-search">
          <input type="text" className="products-search-input" />
        </div>
        <Table data={data} titles={titles}></Table>
      </div>
      <Product />

    </AdminLayout>
  );
};

export { Products };
