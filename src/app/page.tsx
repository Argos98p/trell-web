"use client";
import MyHeader from "@/app/components/header";
import { OutlineInput } from "@/app/components/outline_input";
import { Box, Flex } from "@chakra-ui/react";
import Filters from "./components/filters";
import BottomBar from "./components/bottom_bar";
import Board from "./components/board";
export default function Home() {
  return (
    <Flex direction={"column"} height={'100%'}  overflow="auto">
      <Box height={'140px'}>
        <BottomBar />
        <MyHeader></MyHeader>
        <Filters />
      </Box>
      <Flex flex={"1"}  pt={2} px={2} direction="row" overflow={"auto"}>
        <Board/>
        <Board/>
        <Board/>
        <Board/>
      </Flex>
    </Flex>
  );
}
