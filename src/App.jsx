import Header from './assets/components/Header'
import Card from './assets/components/Card'
import Footer from './assets/components/Footer'
import {  useState} from 'react'

import hamburguer from "./images/sanduiche.png"


function App() {

  
  
  const [total, setTotal] = useState(0) 

  // usa-se função anonima 
  // useEffect(()=>{
  //   setTotal(item+item2)
  // },[item,item2]) //array no final dos states q preciso guardar

  const products = [
    {
      id: "1",
      tittle: "Hamburguer",
      description:"Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida",
      image: hamburguer
    },
    {
      id: "2",
      tittle: "Sanduiche",
      description:"Delicie-se com nosso sanduíche Filet Mignon premium: carne irresistivelmente macia, queijo derretido, cebola caramelizada e molho especial. Uma harmonia perfeita de sabores e texturas que transformam cada mordida em uma experiência gourmet única.",
      image: "src/images/sanduiche2.png"
    }
  ]

  return (
    <>
      <Header/>
      {products.map((product)=>(<Card total={total} setTotal={setTotal} product={product} key={product.id}/>))}
      
      {/* SE TOTAL FOR MENOR QUE 0 NAO EXIBE O FOOTER */}
      {total>0?<Footer total={total} />:null}
      
    </>
  )
}

export default App