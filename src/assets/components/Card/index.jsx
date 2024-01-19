import {  useState } from 'react'
export default function Card(props){
    const [item, setItens] = useState(0)
    function handleItens(action){
        if(action==="+"){
            setItens(item+1) // setItens é uma função, usa-se parenteses
            props.setTotal((prev)=>prev+1)
        }else if(item>0 && action==="-"){
            setItens(item-1) // set é função pra mudar e item é o valor bruto!!!
            props.setTotal((prev)=>prev-1)
    
        }
            
        }
    return (
        <section className="flex   shadow-lg rounded-tr-lg rounded-br-lg	m-9  rounded-tl-lg rounded-bl-lg border border-black items-center m">
            <img src={props.product.image} className=" border border-black rounded-tl-lg rounded-bl-lg " alt="foto de um hamburguer" />
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <main className="">
                        <h2 className="font-bold font-Inter flex text-[16px] justify-center">{props.product.tittle}</h2>
                        <p className=" text-[#929292] text-[8px] text-left">{props.product.description}</p>
                    </main>
                        {/* usa-se uma função para chamar  || DEntro do handle vai o operador!!*/}
                    <article  className="w-[36vw] flex justify-around bg-[#6538E5] font-Inter font-semibold rounded text-white border border-black">
                        <button onClick={()=>{handleItens("-")}} >-</button> 
                            <p>{item===0?"Adicionar Item":item===1?"1 Item":`${item} Itens` }</p>
                        <button onClick={()=>{handleItens("+")}}>+</button>
                    </article>
                </div>

        </section>
    )
}