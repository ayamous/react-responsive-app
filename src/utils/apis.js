import { endpoints } from "../constants/initial-states";

export const callIpApi = ({
  onSuccess = (data) => data,
  onLoading = (loading) => loading,
  onError = (error) => error,
}) => {
  onLoading(true);
  fetch(endpoints.getAdressIp, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      onLoading(false);
    })
    .catch((error) => {
      console.error("Erreur est produite :", error);
      onError(error);
      onLoading(false);
    });
};
