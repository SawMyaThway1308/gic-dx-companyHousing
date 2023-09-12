import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <AppRouter />
        </ChakraProvider>
    );
}
export default App;
createRoot(document.getElementById("app")).render(<App />);
