export default function CustomSelect({label, options}){
    return(
        <div className="w-full flex flex-col gap-2">
            <label className="text-[20px] font-bold">{label}</label>
            <select className="w-full h-[50px] bg-[#1C1C1C] rounded-lg px-2 border border-[#ffffff1a] outline-none cursor-pointer focus:border-purple-400">
                <option value="">Selecione...</option>
                {options.map((opcao) => {
                    return( 
                        <option 
                        key={opcao} 
                        value={opcao}
                        >{opcao}</option>

                )
                })}
                
            </select>
        </div>
    )
}