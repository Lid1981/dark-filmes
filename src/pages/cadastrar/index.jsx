import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar(){
    return(
       <PageWrapper showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[30px] font-bold text-[#FF00FF]">Adicione um novo filme</h1>
                <p className="text-[18px] font-bold text-[#A9A9A9]">Preencha o formulário abaixo para adicionar um novo filme a sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form className="w-[50%] h-auto min-h-[200px] bg-[#696969] border border-[#FF00FF] rounded-2xl flex flex-col p-3"></form> 
                </div>
            </div>
       </PageWrapper>
    )
}