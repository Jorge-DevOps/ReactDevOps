import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const TableProducts = ({ data }) => {
  return data.map((data, key) => {
    return (
      <tbody className="table-data-body" key={key}>
        <td className="table-data-colunm">{data.id}</td>
        <td className="table-data-colunm">{data.name}</td>
        <td className="table-data-colunm">{data.Category}</td>
        <td className="table-data-colunm">{data.brand}</td>
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

export {TableProducts};
