import CustomSelect from "@/components/CustomSelect";
import CustomInput from "@/components/Custominput";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar(){
    return(
       <PageWrapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#FF00FF]">Adicione um novo filme</h1>
                <p className="text-[18px] font-bold text-[#A9A9A9]">Preencha o formulário abaixo para adicionar um novo filme a sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto font-bold min-h-[200px] bg-[#696969] border border-[#FF00FF] rounded-2xl flex flex-col p-5 gap-4">
                        <CustomInput
                        label="Título:"
                        placeholder="Digite o título do filme:"
                        type="text"
                    />
                     <CustomInput
                        label="Diretor:"
                        placeholder="Digite o nome do diretor:"
                        type="text"
                    />
                    <div className="w-full flex gap-4">
                        <div className=" w-[50%]">
                        <CustomInput
                        label="Ano:"
                        placeholder="Digite o ano de lançamento:"
                        type="number"
                    />
                    </div>
                    <div className="w-[50%]">
                        <CustomSelect
                            label="Gênero:"
                            options={["Ação","Suspense", "Drama", "Comédia", "Terror", "Ficção Cientifica", "Romance", "Investigação Policial" ]}
                        />
                    </div>
                    </div>
                    <div className="w-[30%] flex items-center gap-2">
                       <div className="w-[70%]">
                       <CustomInput
                        label="Nota:"
                        placeholder="0"
                        type="number"
                        />
                    </div>
                        <p className="flex mt-8">0 / 10</p>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-[20px] font-bold">Sinopse:</label>
                        <textarea 
                        className="w-ful rounded-lg h-[150px] min-h-[150px] bg-[#1C1C1C] 
                        border border-[#FF00FF] focus:border-purple-400 outline-none cursor-pointer">
                    </textarea>
                    </div>
                    <CustomInput
                        label="Banner:"
                        placeholder="URL da imagem"
                        type="text"
                    />
                    <div className="w-full flex justify-end gap-4">
                        <button 
                        type="reset" 
                        className="w-[100px] h-[50px] rounded-md hover:bg-[#FF00FF] bg-[#1C1C1C] cursor-pointer border border-[#FF00FF]">Cancelar</button>
                    </div>
                    </form> 
                </div>
            </div>
       </PageWrapper>
    )
}