import React from "react";
import { AdminLayout } from "../../../layouts";
import { TableUsers, Product, HeadersTable } from "../../../components";
import "../../../styles/pages/Product.sass";
import { dataUsers } from "../../../data/dataUsers";
const data = dataUsers;

const titles = ["User ID", "Name", "Last name", "Email", "Gender", "Phone"];

const Users = () => {
  return (
    <AdminLayout>
      <div className="products">
        <div className="products-search">
          <input type="text" className="products-search-input" />
        </div>
        <table className="table-data">
          <HeadersTable titles={titles} />
          <TableUsers data={data} />
        </table>
      </div>
      <Product />
    </AdminLayout>
  );
};

export { Users };
