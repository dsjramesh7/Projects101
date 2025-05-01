import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { GlobalContext } from "../../context";

const Main = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransaction,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransaction.forEach((item) => {
      item?.type === "income"
        ? (income = income + parseFloat(item?.amount))
        : (expense = expense + parseFloat(item?.amount));
    });

    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransaction]);
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
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w={"full"}
        alignItems={"start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransaction.filter((item) => item?.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransaction.filter((item) => item?.type === "income")}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
};

export default Main;
