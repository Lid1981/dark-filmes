export default function CardFilme({ filme }){
    return (
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222] cursor-pointer border 
        hover:border[#FF00FF] transition-all duration-200 ease-in-out">
            <div className="w-full h-[70%] rounded-t-lg relative">
                <img
                    className="w-full h-full rounded-t-lg object-cover"
                    src={filme.banner}
                    alt={filme.titulo}
                />
                <div className="absolute top-1 left-2 flex text-[#9ca3af] font-bold">
                    <p className="text-[20px] text-[#FF00FF]">{filme.nota}</p>
                    <p>/10</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[20px] font-bold">{filme.titulo}</p>
                <p className="text-[16px] font-bold text-[#8a898c]">{filme.diretor}</p>
                <div className="w-full flex justify-between">
                    <p className="text-[15px] font-bold text-[#8a898c]">{filme.ano}</p>
                    <div className="px-2 py-0 bg-[#8F7BD8]/10 text-[#FF00FF] rounded-lg">{filme.genero}</div>
                </div>
            </div>
        </div>
    )
}