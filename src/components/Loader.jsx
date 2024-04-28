import { Box, VStack, Spinner} from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack justifyContent={"center"} h="90vh">
 <Box >
       <Spinner size="xl"/>
 </Box>
    </VStack>
   
  )
}

export default Loader