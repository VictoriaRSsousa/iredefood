export default function Footer(props){

    return (
        <article>
           <footer className="flex  justify-between p-6 mt-9 	bg-[#6538E5] text-white h-[70px] items-center font-bold fixed w-svw bottom-0	">
            <p>Total de Itens</p>
            <p>{props.total===1?"1 Item":`${props.total} Itens`}</p>
           </footer>
        </article>
    )
}