import imgAnimada from "../public/tech.svg"

export default function App(){
  return (
    <div className="w-full h-screen flex bg-[#201b2c]"> {/*container*/}
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
          <h1 className="text-[30px] font-bold text-[#1faed1] ">Entre para o nosso time</h1>
          <img src={imgAnimada} alt="imagem-animada" width={500}  />{/*imagem*/}
        </div> {/*esquerda*/}
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-xl">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="Text-[30px] text-[#1faed1] font-bold ">LOGIN</h1>
              </div>{/*dir.topo*/}
            <div className="w-full h-[70%] p-[20px]">
                <label htmlFor="user" className="text-white">Usuário</label>
                <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4"/>

                <label htmlFor="user" className="text-white ">Senha</label>
                <input type="password" id="pass" className="w-full rounded-md p-[10px] bg-[#514768] text-white"/>

            </div>{/*dir.meio*/}
            <div className="w-full h-[15%]"></div>{/*dir.fim*/}
           
           
            </div>{/*dir.topo*/}
          </div>{/* direita*/}
    </div>
  )
}