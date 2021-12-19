import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const TableInventary = ({ data }) => {
  return data.map((data, key) => {
    return (
      <tbody className="table-data-body" key={key}>
        <td className="table-data-colunm">{data.id_product}</td>
        <td className="table-data-colunm">{data.stock}</td>
        <td className="table-data-colunm">{data.wareHouse}</td>
        <td className="table-data-colunm">
          <FaEdit />
        </td>
        <td className="table-data-colunm">
          <BsTrashFill />
        </td>
        <td className="table-data-colunm">
          <GrView />
        </td>
      </tbody>
    );
  });
};

export { TableInventary };
