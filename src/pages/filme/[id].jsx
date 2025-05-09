import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { LuArrowLeft } from "react-icons/lu"

export default function Filme() {
const router = useRouter()
const { id } = router.query


    return (
        <PageWrapper
            showHeader={false}
        >
        <div className="w-full h-full flex flex-coll px-[350px] pt-12 items-start">
            <button 
            onClick={() => router.back()}
            className="px-5 py-2 text-[#FF00FF] gap-2 flex items-center justify-center 
            rounded-lg hover:bg-[#808080] font-bold hover:text-[#FF00FF] cursor-pointer">
            <LuArrowLeft />          
            <p>Voltar para lista de filmes</p>
            </button>
        </div>
        </PageWrapper>
    )
}