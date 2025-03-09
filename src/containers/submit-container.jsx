import React, { useCallback, useState } from "react";
import { ListStepsContainer } from "./list-steps-container";
import { useCheckFormValid } from "../hooks/useCheckFormValid";
import { useMobileDetection } from "../hooks/useMobileDetection";
import { useFormContext } from "../context/form-context";
import { fields } from "../constants/initial-states";
import { callIpApi } from "../utils/apis";

export const SubmitContainer = () => {
  const isMobile = useMobileDetection();
  const [stateCall, setStateCall] = useState({
    loading: false,
    data: null,
    error: null,
  });
  const { formState } = useFormContext();
  const { reason } = useCheckFormValid({
    isMobile: isMobile,
    inputName: formState[fields.fullName] || "",
    inputIntention: formState[fields.intention] || "",
  });

  const callVerification = useCallback(() => {
    if (reason.isValid) {
      callIpApi({
        onLoading: (loading) => {
          setStateCall((prev) => ({ ...prev, loading: loading }));
        },
        onSuccess: (data) => {
          setStateCall((prev) => ({ ...prev, data: data }));
          console.log({ data });
          const ip = data.ipAddress;
          if (
            ip &&
            ip
              .split(".")
              .map(Number)
              .reduce((a, b) => a + b, 0) > 100
          ) {
            alert("OK");
          } else {
            alert("KO");
          }
        },
        onError: (error) => {
          setStateCall((prev) => ({ ...prev, error: error }));
        },
      });
    } else {
      alert(reason.errorMessage);
    }
  }, [reason]);
  return (
    <div
      style={{
        backgroundColor: "transparent",
        width: isMobile ? "100%" : "50%",

        paddingTop: 50,
      }}
    >
      <div
        className="fw-semibold fs-3 "
        style={{ color: "#000000", paddingInline: isMobile ? 32 : 0 }}
      >
        Votre Shynlei c’est..
      </div>
      <div
        className="fw-normal fs-5"
        style={{ color: "#000000", paddingInline: isMobile ? 18 : 0 }}
      >
        7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour
        éclairer le sens, 3 interprétations pour vous aider..
      </div>
      <div>
        <ListStepsContainer />
        <div className="d-flex align-items-center justify-content-center flex-row">
          <div
            onClick={() => callVerification()}
            style={{
              backgroundColor: "#7bbbba",
              color: "#FFF",
              padding: 15,
              borderRadius: 15,
            }}
          >
            {stateCall.loading ? "Loading..." : "EXPRIMER MES RÊVES >"}
          </div>
        </div>
      </div>
    </div>
  );
};
