import Link from 'next/link'

interface MenuItemProps{
    url?: string
    texto: string
    className?: string
    icone: any
    onClick?: (event: any)=>void
}

export default function MenuItem(props: MenuItemProps){

    function renderizarLink(){
        return(
        <a className={`
        flex flex-col justify-center items-center w-21 h-20
        dark:text-gray-200
        ${props.className}
        `}>
        {props.icone}
        <span className={`
        text-xs font-light 
        `}>
            {props.texto}
        </span>
        </a>
        )
    }

    return(
        <li onClick={props.onClick} className={`
        hover:bg-gray-100
        cursor-pointer
        dark:hover:bg-gray-800
        `} >
            {props.url ? (
                <Link href={props.url}>
                {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        
        </li>
    )
}