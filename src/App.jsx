import { useState } from "react"
import imgAnimada from "../public/tech.svg"
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
  //hooks(vai pegar a informação e armazenar)

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  //função para usar no click do Botão

  function clickLogin(){
    if(!user || !pass)
      return toast.error("Preencha todos os campos")
    
    if(user.length < 8 || pass.length <8){
      return toast.error("Usuários  ou Senha inválidos")

    }
     
    console.log(user)
    console.log(pass)
    return toast.success("🦄 Login realizado com sucesso!")

  }
  return (
    <div className="w-full h-screen flex bg-[#201b2c]"> 
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      theme="colored"
    />
    <toastSuccess
    position="top-right"
    autoClose={5000}
    theme="colored"
     />  {/*container*/}
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
          <h1 className="text-[30px] font-bold text-[#1faed1] ">Entre para o nosso time</h1>
          <img src={imgAnimada} alt="imagem-animada" width={500}  />{/*imagem*/}
        </div> {/*esquerda*/}
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-md">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="text-[30px] text-[#1faed1] font-bold ">LOGIN</h1>
              </div>{/*dir.topo*/}
            <div className="w-full h-[60%] p-[20px]">
                <label htmlFor="user" className="text-white">Usuário</label>
                <input 
                onChange={
                  (event) => {setUser(event.target.value)}
                }
                type="text" 
                id="user" 
                className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4"
                />

                <label htmlFor="user" className="text-white ">Senha</label>
                <input 
                onChange={
                  (event) => {setPass(event.target.value)}
                }
                type="password" 
                id="pass" 
                className="w-full rounded-md p-[10px] bg-[#514768] text-white"/>
                <div className="w-full flex items-center justify-center text-white pt-1">
                  <a href="">Esqueceu sua Senha</a>
                </div>

            </div>{/*dir.meio*/}
            <div className="w-full h-[25%] p-[20px] flex items-center justify-center">
              <button 
              onClick={clickLogin}
              className="w-full h-[50px] text-[18px] font-bold text-[#201b2c] rounded-lg bg-[#1faed1] shadow-lg shadow-[#1faed1]">LOGIN</button>
            </div>{/*dir.fim*/}
           
           
            </div>{/*dir.topo*/}
          </div>{/* direita*/}
    </div>
  )
}