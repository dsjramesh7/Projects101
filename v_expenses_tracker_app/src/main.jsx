import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.js";
import App from "./App.jsx";
import GlobalState from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobalState>
);
