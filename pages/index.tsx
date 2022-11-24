import About from "../components/AboutComponent/About";
import Cards from "../components/AsideComponents/Cards";
import Contact from "../components/AsideComponents/Contact";
import Tools from "../components/AsideComponents/Tools";
import Header from "../components/headerComponent/Header";
import Portifolio from "../components/PortifolioComponent/Portifolio";
import Profile from "../components/ProfileComponent/Profile";


export default function Home() {
  return (
    <div className=" w-screen bg-white flex flex-col gap-56 ">
      <div className='w-screen h-full bg-white px-6 py-6  xl:px-52 '>
        <Header/>
        <Profile/>
        <div id="history">
          <About/>
        </div>
        
        <div id="project" className="project">
          <Portifolio/>
        </div>
        
        
      </div>
      <Tools/>

      <div className='flex items-center justify-center'>
        <Cards/>
      </div>

    <div id="contact">
      <Contact/>
      
    </div>
      
    </div>
    
  )
}
