import React from "react";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { ClockClock } from "./ClockClock";

function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: { global: { body: { background: "black" } } },
      })}
    >
      <Flex height='100vh' align='center' justify='center'>
        <ClockClock />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
