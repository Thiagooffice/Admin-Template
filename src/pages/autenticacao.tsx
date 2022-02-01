import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/Icons/Index";

export default function Autenticacao() {

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    function exibirErro(msg, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(()=> setErro(null), tempoEmSegundos * 1000)
    }

    function submeter(){
        if(modo === 'login'){
            console.log('login');
            exibirErro("Ocorreu um erro no login!")
        }else {
            console.log('cadastrar');
            exibirErro("Ocorreu um erro no cadastro!")
            
        }
    }

    return (
        <div className={`
        flex h-screen items-center justify-center
        `}>
            <div className=" hidden md:block md:w-1/2">
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" 
                className="h-screen w-full object-cover"
                />
            </div>
            <div className={`m-10 w-full 
        md:w-1/2
        `}>
            <h1 className={`
            text-3xl font-bold mb-5
            `}>
            {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
            </h1>
            {erro ? (
                 <div className={`
                 bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg flex items-center
                 `}>
                     {IconeAtencao()}
                     <span className="ml-3">{erro}</span>
                 </div>
            ) : false
            }
           



            <AuthInput
            tipo="email"
                label="Email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />

            <AuthInput
                tipo="password"
                label="Senha"
                valor={senha}
                valorMudou={setSenha}
            />

            <button className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg 
             px-4 py-3 mt-6
            `} onClick={submeter}>
            {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className={`
            my-6 border-gray-300 w-full
            `} />

            <button className={`
            w-full bg-red-500 hover:bg-red-400 text-white rounded-lg 
             px-4 py-3
            `} onClick={submeter}>
            Entrar com o Google
            </button>

            {modo === 'login' ? (
                <p className="mt-8">
                    Novo por aqui?
                    <a onClick={()=> setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                    `} > Criar uma conta gratuitamente</a>
                </p>
            ) : (
                <p className="mt-8">
               Já faz parte da nossa comunidade?
                <a onClick={()=> setModo('login')} className={`
                text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                `} > Entre com as suas Credenciais</a>
            </p>
            )}

        </div>
        </div>
        
    )
}