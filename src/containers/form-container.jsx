import React from "react";
import { TextInput } from "../components/text-input";
import { fields } from "../constants/initial-states";

export const FormContainer = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "40%",
        gap: 30,
        paddingTop: 100,
      }}
    >
      <div className="fw-semibold fs-3" style={{ color: "#FFF" }}>
        Pour commencer…
      </div>
      <div className="fw-normal fs-5" style={{ color: "#FFF", width: "80%" }}>
        Faire votre Shynlei, jouer avec, c’est l’occasion d’écouter vos rêves,
        de les partager et de prendre confiance dans votre richesse.
      </div>
      <TextInput label="Nom et prénom :" field={fields.fullName} />

      <TextInput
        label="Mon intention :"
        field={fields.intention}
        secondaryLabel="L’intention, l’objectif de ce Shynlei"
      />
    </div>
  );
};
