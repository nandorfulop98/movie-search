import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function MainPage({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="2xl">{children}</Container>
    </React.Fragment>
  );
}
