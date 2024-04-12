import { Input, InputGroup, InputLeftElement,Box } from "@chakra-ui/react";

import type { IconType } from "react-icons";

interface OutlineInputProps  {
placeholder: string,
inputIcon:IconType
}

const OutlineInput = (props:OutlineInputProps) => {
  return (
    <Box borderRadius="30px" borderWidth={'1px'} >
      <InputGroup >
        <InputLeftElement  pointerEvents="none" maxHeight={'100%'} children={<props.inputIcon width={3} height={3} color={'#999999'}   />} />
        <Input fontSize={'12px'} variant='unstyled'  type="tel" placeholder={props.placeholder}  size='md'/>
      </InputGroup>
    </Box>
  );
};

export { OutlineInput };
