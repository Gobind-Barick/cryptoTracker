import React from 'react'
import axios from 'axios'
import { server } from '../main'
import { useEffect,useState } from 'react'
import { Button, Container, Radio, RadioGroup } from '@chakra-ui/react'
import { HStack , VStack} from '@chakra-ui/react'
import Loader from './Loader'
import CoinCard from "./CoinCard"

const Coins = () => {

  const [coins , setCoins]= useState([])
  const [loading , setLoading] = useState(true)
  const [page, setPage]= useState(1)
  const [Currency,setCurrency]= useState("inr")
  const Currencysymbol = Currency === "inr" ? "₹" : Currency === "eur" ? "€" : "$";
  const btns = new Array(132).fill(1);
  const changePage =(page)=>{
    setPage(page)
    setLoading(false)
  }


  useEffect(() => {
    const fetchCoins= async()=>{
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${Currency}`);
      console.log(data)
      setCoins(data)
      setLoading(false)
    }
    fetchCoins();
  }, [Currency,page])
  return (
   
    <Container maxW={"container.xl"}>
      {loading ? (<Loader /> ):(<>

<RadioGroup value={Currency} onChange={setCurrency}>
  <HStack spacing={8} p={4}>
    <Radio value='inr'>₹</Radio>
    <Radio value='eur'>€</Radio>
    <Radio value='usd'>$</Radio>
  </HStack>
</RadioGroup>
<HStack wrap={"wrap"}>
    {
      coins.map((i)=>(
        <CoinCard key={i.id} id={i.id} name={i.name} img={i.image}  price={i.current_price} symbol={i.symbol} currencysymbol={Currencysymbol}/>
      ))}
    
   </HStack>
  
   <HStack w={"full"} overflow={"auto"}>
        {btns.map((item, index) => (<Button bgColor={"blackAlpha.900"} 
        
      color={"white"} 
      onClick={() => changePage(index+1)}>
      {index+1}
      </Button>))

      }

    </HStack>
          

</>)}
    </Container>
  )
}

export default Coins