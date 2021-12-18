import React from "react";
import "../../../styles/components/Table.sass";
import PropTypes from "prop-types";

const headersTable = ({ titles }) => {
  return (
    <thead className="table-data-head">
      <tr className="table-data-row">
        {titles.map((title) => {
          return <th className="table-data-title">{title}</th>;
        })}
      </tr>
    </thead>
  );
};

headersTable.propTypes = {
  titles: PropTypes.array,
};

export default headersTable; 
