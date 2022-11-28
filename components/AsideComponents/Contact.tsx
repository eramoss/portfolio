import Socialmedia from "../ProfileComponent/SocialMedia";
import { ImMail4,ImWhatsapp } from 'react-icons/im'




export default function Contact() {





  return (
    <div id="" className=' w-screen bg-[#363434] flex items-center gap-8 -mt-16 flex-col pt-16 pb-6 '>

      <div className="flex flex-col items-center justify-center w-3/6 gap-5">
        <h1 className="font-bold text-white text-xl ">eramoss</h1>
        <h2 className="text-gray-500 text-center">Espero que tenha gostado de conhecer um pouco de de mim, e se quiser conversar comigo minhas redes sociais e contato estão abaixo</h2>
        <Socialmedia className=" flex gap-10 text-gray-400"/>
      </div>

      <div className="flex w-screen gap-6 p-4
      ">
        <div className="text-gray-500  flex items-center gap-4">
          
          <ImMail4 className="text-3xl"/>
          <h1>edulramos@outlook.com</h1>
        </div>
        <div className="text-gray-500  flex items-center gap-4">
          
          <ImWhatsapp className="text-3xl "/>
          <h1 >+55 (47) 99705 7214</h1>
        </div>

        
        
      </div>

      
        
    </div>
  )
}