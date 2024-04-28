import React from 'react'
import axios from 'axios'
import { server } from '../main'
import { useEffect,useState } from 'react'
import { Container } from '@chakra-ui/react'
import ExchangeCard from './ExchangeCard'
import { HStack } from '@chakra-ui/react'
import Loader from './Loader'

const Exchanges = () => {

  const [exchanges , setExchanges]= useState([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchExchanges = async()=>{
      const{data} = await axios.get(`${server}/exchanges`);
      console.log(data)
      setExchanges(data)
      setLoading(false)
    }
    fetchExchanges();
  }, [])
  return (
   
    <Container maxW={"container.xl"}>
      {loading ? (<Loader /> ):(<>

<HStack wrap={"wrap"}>
    {
      exchanges.map((i)=>(
        <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
      ))}
    
   </HStack>
          

</>)}
    </Container>
  )
}

export default Exchanges