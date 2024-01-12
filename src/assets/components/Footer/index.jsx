export default function Footer(props){

    return (
        <article>
           <footer className="flex gap-6  justify-center m-9 rounded-xl	bg-violet-500 text-white h-[70px] items-center font-bold	">
            <p>Total de Itens</p>
            <p>{props.total===1?"1 Item":`${props.total} Itens`}</p>
           </footer>
        </article>
    )
}