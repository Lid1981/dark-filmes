export default function CustomInput( {label, placeholder, type} ){
    return(
        <div className="flex flex-col w-full gap-2">
            <label className="text-[20px] font bold">{label}</label>
            <input
                className="w-full h-[50px] bg-[#1C1C1C] rounded-lg pl-2 border border-[#ffffff1a] outline-none cursor-pointer focus:border-purple-400"
                type={type}
                placeholder={placeholder}

            />
        </div>
    )
}