import { useEffect, useState } from "react";
import { initialFormValidation } from "../constants/initial-states";

export const useCheckFormValid = ({
  isMobile = false,
  inputName = null,
  inputIntention = null,
}) => {
  const [reason, setReason] = useState(initialFormValidation);
  const clearState = () => {
    setReason(initialFormValidation);
  };

  useEffect(() => {
    if (isMobile) {
      setReason({ isValid: true, errorMessage: null });
      return;
    }

    if (!inputName || inputName.length === 0) {
      setReason({
        isValid: false,
        errorMessage: "name is required",
      });
      return;
    }
    if (!inputIntention || inputIntention.length === 0) {
      setReason({
        isValid: false,
        errorMessage: "please write your intention",
      });
      return;
    }
    if (
      inputName &&
      inputIntention &&
      inputIntention.length > 0 &&
      inputName.length > 0
    ) {
      setReason({
        isValid: true,
        errorMessage: null,
      });
      return;
    }

    return () => clearState();
  }, [inputIntention, inputName, isMobile]);

  return {
    reason,
  };
};
