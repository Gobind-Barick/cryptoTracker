import { VStack , Heading , Text, Image, css } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({name , rank , img ,url}) => {

  return (
<a href={url} target={"blank"}>
<VStack w={"52"} shadow={"dark-lg"} p={"8"} m={"4"} borderRadius={"1g"} transition={"all 0.5s"}

css={
    {
        "&:hover":{
          transform:"scale(1.1)"
        }
      }
}>
<Image
  src={img}
  w={"10"}
  h={"10"}
  objectFit={"contain"}
  alt={"exchanges"}
  />
  <Heading size={"md"} nooflines={1}>
    {rank}
    </Heading>
  <Text>{name}</Text>
</VStack>
</a>

  )
}

export default ExchangeCard