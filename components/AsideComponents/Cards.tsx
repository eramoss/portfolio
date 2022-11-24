import { HiArrowLongRight } from "react-icons/hi2";




export default function Cards() {
  return (
    <div  className=' flex flex-col items-center gap-16 '>

      <h1 className="font-semibold text-4xl w-full text-center" >Trajetória acadêmica</h1>
      <div className="flex gap-24">
      <div className='flex items-center justify-center w-80'>
        <div className="flex flex-col">
          <img  className="border border-violet-600" src="/univali.jpeg" alt="" />
          <div className=" bg-[#333333] h-48 text-white p-4 flex flex-col justify-between">
            <div className="flex justify-between text-xs">
            <h1>
              em novembro
            </h1>
            <h1>2022</h1>
            </div>
            
            <h1 className="font-semibold" > formado no ensino médio & pensamento computacional na univali - CAU</h1>

            <footer className="flex text-white items-center justify-between">
              <h1>saiba mais...</h1>
              <a href="https://www.univali.br/">
                <HiArrowLongRight className="text-3xl"/>
              </a>
              
            </footer>
            
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-80'>
        <div className="flex flex-col">
          <img className="border border-slate-300 w-80" src="/entra21.jpeg" alt="" />
          <div className=" bg-[#333333] h-48 text-white p-4 flex flex-col justify-between">
            <div className="flex justify-between text-xs">
            <h1>
              em setembro
            </h1>
            <h1>2022</h1>
            </div>
            
            <h1 className="font-semibold" > Formado em desenvolvimento Front-end no projeto Entra21 </h1>

            <footer className="flex text-white items-center justify-between">
              <h1>saiba mais...</h1>
              <a href="https://www.entra21.com.br/">
                <HiArrowLongRight className="text-3xl"/>
              </a>
              
            </footer>
            
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}