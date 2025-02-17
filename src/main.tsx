import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const container = document.getElementById("root");
const root = createRoot(container!);

const config = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
      shadows: {
        sm: { value: "2px 2px 0 rgba(0, 0, 0, 0.14)" },
      },
    },
    tokens: {
      colors: {},
      radii: {
        sm: { value: "2px" },
      },
    },
  },
});

root.render(
  <Provider store={store}>
    <ChakraProvider value={config}>
      <App />
    </ChakraProvider>
  </Provider>,
);
