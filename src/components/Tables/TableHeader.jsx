import React from "react";

const TableHeader = ({ column }) => {
  return (
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
      {column}
    </th>
  );
};

export default TableHeader;
