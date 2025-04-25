import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";

const Main = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex flexDirection={"column"} textAlign={"center"} paddingInline={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"red.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose} />
      <Flex
        w={"full"}
        alignItems={"start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
};

export default Main;
