export default function Card(props){
    function handleItens(action){
        if(action==="+"){
            props.setItens(props.item+1) // setItens é uma função, usa-se parenteses
        }else if(props.item>0 && action==="-"){
            props.setItens(props.item-1) // set é função pra mudar e item é o valor bruto!!!
    
        }
            
        }
    return (
        <article className="flex justify-center  flex-col items-center p-2  shadow-md rounded-xl border-black border-4 pb-4	m-5">
            <img src="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75 " className="w-[200px] h-[130px] " alt="foto de um hamburguer" />
            <main className="flex flex-col  text-center">
                <h2 className="font-bold text-[25px]">Hamburguer</h2>
                <p className="w-80 text-gray-500 text-[15px]">Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.</p>
            </main>
            <footer className="flex gap-2">
                {/* usa-se uma função para chamar  || DEntro do handle vai o operador!!*/}
                <button onClick={()=>{handleItens("-")}} >-</button> 
                    <p>{props.item===0?"Adicionar Item":props.item===1?"1 Item":`${props.item} Itens`}</p>
                <button onClick={()=>{handleItens("+")}}>+</button>
            </footer>
    
        </article>
    )
}