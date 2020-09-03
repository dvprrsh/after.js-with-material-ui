import { After, ensureReady } from "@jaredpalmer/after";
import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import theme from "../theme";
import routes from "./routes";

ensureReady(routes).then((data) =>
  hydrate(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <After data={data} routes={routes} />
      </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
  )
);

if (module.hot) {
  module.hot.accept();
}
