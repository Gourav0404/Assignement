import React from "react";

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-800 rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Role</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="4" className="p-4 text-center text-black">
              No records found
            </td>
          </tr>
        ) : (
          data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{row.name}</td>
              <td className="p-2 border">{row.email}</td>
              <td className="p-2 border">{row.role}</td>
              <td className="p-2 border border-white flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
