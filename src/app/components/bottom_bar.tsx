"use client";
import { Container, Stack } from "@chakra-ui/react";
import { HamburgerIcon, InfoOutlineIcon, BellIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Flex, Spacer, Wrap, WrapItem } from "@chakra-ui/react";


const BottomBar: React.FC = () => {
  return (
    
      <Flex color="#494949" backgroundColor="#fff" alignItems="center" gap="0.7em" height="3em" paddingLeft="1em" paddingRight="1em">
        <HamburgerIcon color="#494949" />
        <Spacer />
        Trello App
        <Spacer />
        <InfoOutlineIcon />
        <BellIcon />
        <Flex height="2em" alignItems="center">
          <Avatar
            height="2em"
            width={"2em"}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            borderRadius="full"
          />
        </Flex>
      </Flex>
  );
};

export default BottomBar;