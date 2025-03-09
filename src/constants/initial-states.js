export const initialFormValidation = {
  isValid: false,
  errorMessage: null,
};

export const fields = {
  intention: "intention",
  fullName: "fullName",
};
const initialUrl = "https://api.db-ip.com/v2";

export const endpoints = {
  getAdressIp: `${initialUrl}/free/self`,
};
