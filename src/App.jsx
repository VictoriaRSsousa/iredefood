import Header from './assets/components/Header'
import Card from './assets/components/Card'
import Footer from './assets/components/Footer'
import { useEffect, useState } from 'react'



function App() {

  const [item, setItens] = useState(0)
  const [item2, setItens2] = useState(0)
  const [total, setTotal] = useState(0) 

  //usa-se função anonima 
  useEffect(()=>{
    setTotal(item+item2)
  },[item,item2]) //array no final dos states q preciso guardar

  return (
    <>
      <Header/>
      <Card item={item} setItens ={setItens} />
      <Card item={item2} setItens={setItens2} />
      {/* SE TOTAL FOR MENOR QUE 0 NAO EXIBE O FOOTER */}
      {total>0?<Footer total={total} />:null}
      
    </>
  )
}

export default App