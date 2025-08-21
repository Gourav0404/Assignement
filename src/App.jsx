import React, { useState } from "react";
import InputField from "./Components/InputField";
import DataTable from "./Components/DataTable";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert('Please Add Information !!');
      return;
    }




    if (editingIndex !== null) {
      const updated = [...users];
      updated[editingIndex] = formData;
      setUsers(updated);
      setEditingIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({ name: "", email: "", role: "" });
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto border border-2 border-black mt-20">
      <h1 className="text-2xl font-bold mb-4"> Assignment (Demo App)</h1>

      {/* Form */}
      <div className="flex gap-2 mb-4">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className='px-3 py-2'
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <InputField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter role"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded h-12 mt-6 hover:bg-blue-700"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */}
      <DataTable data={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
