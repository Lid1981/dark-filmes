import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { PiNotePencil } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Filme() {
const router = useRouter()
const { id } = router.query
const [filme, setFilmes] = useState({})

useEffect(() => {
    async function getFilmesById(){
      const response = await instance.get(`/api/movies/${id}`)
      setFilmes(response.data)
    }
        if(id){
    getFilmesById()
    }
}, []);

    return (
        <PageWrapper
            showHeader={false}
        >
        <div className="w-full h-full min-h-screen flex flex-coll px-[350px] pt-12 items-start">
            <button 
            onClick={() => router.back()}
            className="px-5 py-2 text-[#FF00FF] gap-2 flex items-center justify-center 
            rounded-lg hover:bg-[#808080] font-bold hover:text-[#FF00FF] cursor-pointer">
            <LuArrowLeft />          
            <p>Voltar para lista de filmes</p>
            </button>
            <div className="w-full min-h-[90vh] flex">
                <div className="w-[30%] h-full flex flex-col ">
                    <div className="w-full h-[90%]">
                        <img className="w-full h-full roudend-lg object-cover"
                        src="https://m.media-amazon.com/images/S/pv-target-images/4a38198dbdc5535e124d063718b6610e103f6965b7984b6377cceeb9e5fe8046.jpg"
                        alt=""
                        />
                    </div>
                    <div className="w-full h-[10%] flex pt-4 justify-between">
                        <button className="w-[46%] h-full border border-[#9b87f533] rounded-md 
                        text-[#FF00FF] font-bold hover:bg-[#9b87f5]/20 flex items-center 
                        justify-center gap-2 py-2 cursor-pointer"><PiNotePencil size={20} />Editar filme</button>
                        <button className="w-[46%] h-full border border-[#9b87f533] hover:bg-[#ef4444]/20 font-bold 
                        text-[#FF00FF] cursor-pointer rounded-md flex items-center 
                        justify-center gap-2 py-2"><RiDeleteBinLine size={20} />Excluir filme</button>
                    </div>
                </div>
                <div className="w-[70%] h-full pl-4 flex flex-col">
                    <div className="w-full flex items-baseline gap-2">
                        <h1 className="text-[35px] text-[#FF00FF] font-bold">Interstelar</h1>
                        <p className="text-[#8a898c] text-[20px] font-bold">(2014)</p>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="py-1 px-4 rounded-2xl bg-[#00FF00]/30 text-[#00FF00]">
                            <p className="text-[17px] font-bold">10/10</p>
                        </div>
                        <div className="py-1 px-4 rounded-2xl bg-[#FF00FF]/30 text-[#FF00FF]">
                            <p className="text-[20px] font-bold">Ficção</p>
                        </div>    
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <h4 className="font-bold text-[20px]">{Filme.diretor}</h4>
                        <p className="text-[#8a898c] font-bold">Robert W.</p>
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <h4 className="font-bold text-[20px]">{Filme.sinopse}</h4>
                        <p className="text-[#8a898c] font-bold">Várias informações</p>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}