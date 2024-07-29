import { defaultTheme, Preflight, ThemeProvider as Provider } from "@xstyled/styled-components";
import { GlobalStyle } from "./globals.js";

export function ThemeProvider() {
  return (
    <Provider theme={defaultTheme}>
      <Preflight />
      <GlobalStyle />
    </Provider>
  );
}
