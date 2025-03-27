import React from "react";

const LoginInputField = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-sm font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default LoginInputField;
