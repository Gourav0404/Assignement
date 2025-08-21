import React from "react";

const InputField = ({
  label,
  name,                // 👈 receive name
  id,
  type = "text",
  value = "",
  onChange,
  placeholder,
  error,
  helper,
  disabled = false,
}) => {
  const inputId =
    id || name || `input-${(label || "field").toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col mb-3 w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1 font-medium">
          {label}
        </label>
      )}

      <input
        id={inputId}
        name={name}                 // 👈 forward name to the native input
        type={type}
        value={value}               // 👈 controlled input (no undefined)
        onChange={onChange}         // 👈 pass event back up
        placeholder={placeholder}
        disabled={disabled}
        className={`border px-3 py-2 rounded focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        aria-invalid={!!error || undefined}
        aria-describedby={
          error ? `${inputId}-error` : helper ? `${inputId}-help` : undefined
        }
      />

      {helper && !error && (
        <small id={`${inputId}-help`} className="text-gray-500">
          {helper}
        </small>
      )}
      {error && (
        <small id={`${inputId}-error`} className="text-red-500">
          {error}
        </small>
      )}
    </div>
  );
};

export default InputField;
