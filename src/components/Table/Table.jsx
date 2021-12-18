import React from "react";
import TableProducts from "./products/TableProducts"
import TableUsers from "./users/TableUsers"
import "../../styles/components/Table.sass";
import PropTypes from "prop-types";
import HeadersTable from "./headersTable/headersTable"

const Table = ({ data,titles }) => {
  return (
    <table className="table-data">
      <HeadersTable titles={titles}/>

      {URL.pathname == "/admin/users" 
          ? <TableUsers data={data} />
          : <TableProducts data={data} />
        }
   
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array,
};

export { Table };
