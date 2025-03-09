import React, { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    fullName: "",
    intention: "",
  });

  const updateField = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formState, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("FormProvider is Required ");
  }
  return context;
};
