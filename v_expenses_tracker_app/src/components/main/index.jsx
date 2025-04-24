import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";

const Main = () => {
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
          <Button bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary />
      <Flex>
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
};

export default Main;
