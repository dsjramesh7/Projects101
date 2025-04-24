import { Box, Button, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Main from "./components/main";

const App = () => {
  return (
    <Container bg={"#f8fafd"} maxW={"container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
