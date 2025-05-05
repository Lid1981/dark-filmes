import { LuFilm } from "react-icons/lu";

export default function Header({ showButton = true }){
    return(
        <header className="w-full h-[75px] flex bg-[#0C0F15] justify-between pr-2 items-center">
            <div className="flex items-center justify-center h-full gap-2 pl-2">
                 <LuFilm color="#FF00FF" size={26}/>
                 <h2 className="font-bold text-[20px]">Dark Films</h2>
            </div>
            {showButton && (
                <button className="w-[150px] h-[50%] rouded-md 
                bg-[#FF00FF] font-bold hover:bg-[#FF00FF]/70 cursor-pointer">Adicionar Filme</button>
            )}
        </header>
    )
}