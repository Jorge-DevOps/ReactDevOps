import React from "react";
import "../../../styles/components/Table.sass";
import PropTypes from "prop-types";

const HeadersTable = ({ titles }) => {
  return (
    <thead className="table-data-head">
      <tr className="table-data-row">
        {titles.map((title) => {
          return <th className="table-data-title">{title}</th>;
        })}
      <th className="table-data-title">Edit</th>
      <th className="table-data-title">Delete</th>
      <th className="table-data-title">View More</th>
      </tr>
    </thead>
  );
};

HeadersTable.propTypes = {
  titles: PropTypes.array,
};

export {HeadersTable}; 
