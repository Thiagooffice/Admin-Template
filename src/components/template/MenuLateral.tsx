import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../Icons/Index"
import MenuItem from "./MenuItem"
import Logo from '../../images/logo.png'
import Image from "next/image"

export default function MenuLateral(){
    return(
        <aside className={`
        flex flex-col
        text-gray-700
        dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
            flex flex-col items-center justify-center
            h-20 2-20
            bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
            <Image src={Logo}     alt="Logo"
             width={100}
             height={100}/>
            </div>

            <ul className={`
            flex-grow
            `}>
            <MenuItem url="/" texto="Inicio" icone={IconeCasa} />

            <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />

            <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>

            <ul className={`
            `}>
            <MenuItem 
            onClick={()=> console.log("Logout")}
            texto="Sair" icone={IconeSair} 
            className={`
            text-red-600
            dark:text-red-400
            hover:bg-red-400
            hover:text-white
            dark:hover:text-white
            `}
            />
            </ul>
        </aside>
    )
}