"use client";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  AvatarBadge,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function MyHeader() {
  return (
    <Flex  w={"400px"} maxW={'400px'} align={'center'} margin={'10px'}>
      <Box
        w="40px"
        h="40px"
        bg="orange.300"
        borderRadius={"0.4em"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StarIcon color={"#fff"} />
      </Box>
      <Spacer/>
      <Heading as="h4" size="md">
        Daily Organizer
      </Heading>
      <Spacer/>
      <Wrap spacing={1}>
        <WrapItem>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
            size="sm"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
            size="sm"
          />
        </WrapItem>
      </Wrap>
    </Flex>
  );
}
