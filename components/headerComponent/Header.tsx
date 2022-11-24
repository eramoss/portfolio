import HoverCardDemo from "./card";
import Menu from "./Menu";


export default function Header() {
  return (
   
      <div className='flex justify-between items-center w-full bg-white '>
        <HoverCardDemo/>
        <Menu/>
        
      </div>

    
  )
}