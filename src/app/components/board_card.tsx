import {
  Card,
  Flex,
  Box,
  CardBody,
  CardFooter,
  Text,
  Heading,
  MenuItem,
  MenuList,
  Menu,
  MenuButton,
  IconButton,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  CardHeader,
  Avatar,
  Image
} from "@chakra-ui/react";
import { LuClock } from "react-icons/lu";
import { SlOptions } from "react-icons/sl";
import { CgAttachment } from "react-icons/cg";

const BoardCard = () => {
  return (
    <Card size={"lg"} alignItems={'center'}>
        <CardHeader p={0} pt={4}>
        <Box boxSize='sm' maxW={'250px'} maxH={'250'}>
            <Image borderRadius={'7px'} objectFit='contain' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        </CardHeader>
      <CardBody py={5} px={4}>
        <Flex>
          <Text fontSize={"14px"}>
            View a summary of all your customers over the last month.
          </Text>
          <Flex justifyContent="flex-start" color={"#c2c2c2"} fontSize={"13px"}>
            <Box mt={1}>
              <CgAttachment />
            </Box>
            <Box ml={1}>1</Box>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <HStack spacing={2}>
            {["sm", "sm", "sm"].map((size) => (
              <Tag
                size={size}
                key={size}
                fontSize={"10px"}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>Green</TagLabel>
              </Tag>
            ))}
          </HStack>

          <Menu isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<SlOptions color="#c2c2c2" />}
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
        <Flex mt={2} justifyContent={'space-between'}>
            <HStack color={"#c2c2c2"}>
                <LuClock />
                <Text fontSize={'11px'}>Due jun 27</Text>
            </HStack>    
            <HStack>
                <Avatar
                height="1.5em"
                width={"1.5em"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                borderRadius="full"
            />
            <Avatar
                height="1.5em"
                width={"1.5em"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                borderRadius="full"
            />
            <Avatar
                height="1.5em"
                width={"1.5em"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                borderRadius="full"
            />
            </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BoardCard;
