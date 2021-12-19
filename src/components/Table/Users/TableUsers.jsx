import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";


const TableUsers = ({ data }) => {
  return data.map((data, key) => {
    return (
      <tbody className="table-data-body" key={key}>
        <td className="table-data-colunm">{data.id}</td>
        <td className="table-data-colunm">{data.first_name}</td>
        <td className="table-data-colunm">{data.last_name}</td>
        <td className="table-data-colunm">{data.email}</td>
        <td className="table-data-colunm">{data.gender}</td>
        <td className="table-data-colunm">{data.phone}</td>
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

export {TableUsers};
