import React from "react";
import { AdminLayout } from '../../../layouts'
import { dataInventory } from "../../../data/dataInventory";
import { TableInventary, Product, HeadersTable } from "../../../components";

const data = dataInventory;

const titles = ["Product ID", "Stock", "wareHouse"];


const Inventory = () => {
  return (
    <AdminLayout>
    <div className="products">
      <div className="products-search">
        <input type="text" className="products-search-input" />
      </div>
      <table className="table-data">
        <HeadersTable titles={titles} />
        <TableInventary data={data} />
      </table>
    </div>
    <Product />
  </AdminLayout>
  );
};

export { Inventory };
