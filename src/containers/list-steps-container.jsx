import React from "react";
import { steps } from "../constants/steps";
import { StepComponent } from "../components/step-component";
import { useMobileDetection } from "../hooks/useMobileDetection";

export const ListStepsContainer = () => {
  const isMobile = useMobileDetection();
  return (
    <div
      className="row py-3"
      style={{
        paddingInline: isMobile ? 20 : 0,
      }}
    >
      {steps &&
        steps.length > 0 &&
        steps.map((el) => (
          <div key={el.id.toString()} className="col-12 col-md-6">
            <StepComponent step={el.id} text={el.text} />
          </div>
        ))}
    </div>
  );
};
