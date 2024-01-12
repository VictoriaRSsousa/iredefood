import {  useState } from 'react'
export default function Card(props){
    const [item, setItens] = useState(0)
    function handleItens(action){
        if(action==="+"){
            setItens(item+1) // setItens é uma função, usa-se parenteses
        }else if(item>0 && action==="-"){
            setItens(item-1) // set é função pra mudar e item é o valor bruto!!!
    
        }
            
        }
    return (
        <section className="flex  w-[90vw] border border-black items-center m-[3px]">
            <img src={props.product.image} className="w-[40.6vw] h-[40vh]" alt="foto de um hamburguer" />
                <div className=" ">
                    <main className="flex flex-col">
                        <h2 className="font-bold font-Inter flex justify-center">{props.product.tittle}</h2>
                        <p className=" text-[#929292] text-[16px] text-wrap text-left">{props.product.description}</p>
                    </main>
                        {/* usa-se uma função para chamar  || DEntro do handle vai o operador!!*/}
                    <article  className="flex justify-around bg-[#6538E5] text-white">
                        <button onClick={()=>{handleItens("-")}} >-</button> 
                            <p>{item===0?"Adicionar Item":item===1?"1 Item":`${item} Itens`}</p>
                        <button onClick={()=>{handleItens("+")}}>+</button>
                    </article>
                </div>

        </section>
    )
}