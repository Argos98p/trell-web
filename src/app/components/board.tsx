import {
  Spacer,
  Box,
  Flex,
  Heading,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import { IconButton } from "@chakra-ui/react";
import BoardCard from "./board_card";
const Board: React.FC = () => {
  return (
    <Box
      minW={"330px"}
      h={"100%"}
      bg={"blue"}
      p={3}
      bgColor={"#f0f3f8"}
      borderRadius={4}
      mx={1}
    >
      <Flex alignItems={"center"} direction={"column"}>
        <Flex alignItems={"center"} w='100%'>
          <Heading as="h4" size="md">
            Due soon ⏰
          </Heading>
          <Spacer></Spacer>

          <Menu isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<SlOptions />}
              variant="ghost"
            />

            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex direction={'column'} gap={5} >
          <BoardCard />
          <BoardCard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Board;
