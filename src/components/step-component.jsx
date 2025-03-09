import React, { useMemo } from "react";
import { handleGetImage } from "../utils/handle-get-image";

export const StepComponent = ({ step = 0, text = null }) => {
  const image = useMemo(() => handleGetImage(step), [step]);

  return (
    <div
      className="py-2"
      style={{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        gap: 15,
      }}
    >
      <img src={image} alt="media" />
      {text && <div>{`${step}. ${text}`}</div>}
    </div>
  );
};
