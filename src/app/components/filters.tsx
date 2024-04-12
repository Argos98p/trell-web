import { OutlineInput} from '@/app/components/outline_input'
import { Flex } from '@chakra-ui/react'
import { LuSearch } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineHashtag } from "react-icons/hi";

const Filters : React.FC= () =>{
    return (
        <Flex w={'400px'} gap={3} margin={2}>
            <OutlineInput placeholder='Search...' inputIcon={LuSearch} />
            <OutlineInput placeholder='People' inputIcon={HiOutlineUsers}/>
            <OutlineInput placeholder='Labels' inputIcon={HiOutlineHashtag}/>
        </Flex>
    )
}
export default Filters