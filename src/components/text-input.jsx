import React from "react";
import { useFormContext } from "../context/form-context";

export const TextInput = ({
  label = "Text Label",
  secondaryLabel = null,
  field = "",
}) => {
  const { formState, updateField } = useFormContext();
  const handleChange = (e) => {
    const value = e.target.value;
    updateField(field, value);
  };
  return (
    <div>
      <div className="fw-normal fs-5" style={{ color: "#FFF" }}>
        {label}
      </div>
      {secondaryLabel && (
        <div className="fw-lighter fs-6" style={{ color: "#FFF" }}>
          {secondaryLabel}
        </div>
      )}
      <input
        value={formState[field] || ""}
        onChange={handleChange}
        style={{
          backgroundColor: "transparent",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#FFF",
          padding: 15,
          color: "#FFF",
        }}
      />
    </div>
  );
};
