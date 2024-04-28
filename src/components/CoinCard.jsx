import { VStack , Heading , Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({name , price, img ,id ,currencysymbol , symbol}) => {


  return (
<>
<Link to={`/coin/${id}`}>
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
    {symbol}
    </Heading>
  <Text>{name}</Text>
  <Text>{price ? `${currencysymbol}${price}`: "N/A"}</Text>
</VStack>
</Link>


</>
  )
}

export default CoinCard