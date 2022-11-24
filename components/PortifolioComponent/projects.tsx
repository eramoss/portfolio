import { useEffect } from "react";
import ImageRatio from "../AppComponents/ImageRatio";


export default function Projects() {

  
  
  var ratiolg = 13
  var ratioxlg = 14
  var ratiobase = 10
  var ratiosm = 9
  
  if (typeof window !== "undefined") {
    ratiolg = 5
    ratioxlg = 5
    ratiobase = 5
    ratiosm = 5
  }
    
return (

    <div className="w-full self-center bg-transparent flex flex-col justify-center  items-center gap-4 p-6">
      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center ">
        <ImageRatio  title="Space Notes" FisrtRatio={9} SecondRatio={ratioxlg} src="/SpaceNotes.jpeg" alt="" />
        <ImageRatio title="Password-Generator" FisrtRatio={9} SecondRatio={ratiobase} src="/passwordGenerator.png" alt="" />
        <ImageRatio title="Design System" FisrtRatio={9} SecondRatio={ratiolg} src="/designSystem.jpeg" alt="" />
      </div>
      
      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center " >
        <ImageRatio title="Bon Coffe" FisrtRatio={9} SecondRatio={ratiosm} src="/Bon-coffe.png" alt="" />
        <div className="sm:-mt-36  ">
          <ImageRatio  title="Expenses chart Component " FisrtRatio={9} SecondRatio={ratiolg} src="/Expenses-chart.jpg" alt="" />
        </div>
        
        <div className="sm:-mt-10" >
          <ImageRatio  title="Weather App" FisrtRatio={9} SecondRatio={ratiobase} src="/Weather-App.jpeg" alt="" />
        </div>
        
        </div>
        
    </div>
    
  )
}