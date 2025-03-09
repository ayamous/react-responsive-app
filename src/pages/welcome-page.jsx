import React from "react";
import { FormContainer } from "../containers/form-container";
import { BackgroundUi } from "../components/background-ui";
import { Header } from "../components/header";
import { useMobileDetection } from "../hooks/useMobileDetection";
import { SubmitContainer } from "../containers/submit-container";

export const WelcomePage = () => {
  const isMobile = useMobileDetection();

  return (
    <div style={styles.container}>
      {isMobile ? (
        <div>
          {" "}
          <SubmitContainer />
        </div>
      ) : (
        <BackgroundUi>
          <Header />
          <div style={styles.contentWrapper}>
            <FormContainer />
            <SubmitContainer />
          </div>
        </BackgroundUi>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
};
