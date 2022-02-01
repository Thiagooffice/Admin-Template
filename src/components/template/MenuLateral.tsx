import { IconeAjustes, IconeCasa, IconeSino } from "../Icons/Index"
import MenuItem from "./MenuItem"
import Logo from '../../images/logo.png'
import Image from "next/image"

export default function MenuLateral(){
    return(
        <aside>
            <div className={`
            flex flex-col items-center justify-center
            h-20 2-20
            bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
            <Image src={Logo}     alt="Logo"
             width={100}
             height={100}/>
            </div>
            <ul>
            <MenuItem url="/" texto="Inicio" icone={IconeCasa} />

            <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />

            <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
        </aside>
    )
}