import Text from "./Text"
import Footer from "./footer"
import Image from "next/image"




export default function Profile() {


  

  return (

    <div>
      <div className='flex md:flex-row flex-col  items-center w-full pb-2  pt-16 md:pb16 justify-between'>
        <Text/>
        <Image width={500} height={22} src="/profile-int.jpg" alt='profile pic of a man in a gray background'  className="w-96 sm:ml-5 sm:w-[22rem] sm:h-[32rem] h-72 object-cover sm:-pt-0 pt-8"  />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}