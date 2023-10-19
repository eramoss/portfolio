import {
  SiTypescript,
  SiRust,
  SiKotlin,
  SiC,
  SiCplusplus,
  SiHaskell,

} from 'react-icons/si'


export default function Tools() {
  return (
    <div className=' hidden w-screen bg-[#363434] sm:flex items-center justify-center '>
      <h1 className="text-[400px] text-[#464646]  opacity-40" >Tools</h1> 
      <nav className="w-3/4 absolute h-full " >

        <div className='w-full h-full flex flex-col items-center justify-center  text-slate-100 gap-8'>
            <h1 className='text-4xl' >Languages that i enjoy.</h1>

          <div className=" flex p-4 items-center justify-center text-7xl gap-11" > 

            <SiRust  />
            <SiKotlin   />
            <SiC  />
            <SiHaskell  />
            <SiTypescript />
            <SiCplusplus />

          </div>
        </div>
        
      </nav>
    </div>
  )
}