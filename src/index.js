import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import store from "./state/store";
import { StatConverter } from "./components";
import { theme, globalStyles } from "./styles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Global styles={css`${globalStyles}${emotionNormalize}`} />
    <ThemeProvider theme={theme}>
      <StatConverter />
    </ThemeProvider>
  </Provider>,
  rootElement
);
