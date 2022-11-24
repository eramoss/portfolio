import Text from "./Text"
import Footer from "./footer"
import Image from "next/image"
import ImageRatio from "../AppComponents/ImageRatio"
import { useState, useEffect } from "react"



export default function Profile() {


  

  return (

    <div>
      <div className='flex md:flex-row flex-col  items-center w-full pb-2  pt-16 md:pb16 justify-between'>
        <Text/>
        <img src="/profile-int.jpg" alt='profile pic of a man in a gray background'  className="w-96 ml-4"  />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}