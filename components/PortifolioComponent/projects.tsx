import { useEffect } from "react";
import ImageRatio from "../AppComponents/ImageRatio";


export default function Projects() {

  

    
return (

    <div className="w-full self-center bg-transparent flex flex-col justify-center  items-center gap-4 p-6">
      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center ">
        <a href="https://github.com/eramoss/Space-Notes"><ImageRatio  title="Space Notes" FisrtRatio={9} SecondRatio={14} src="/SpaceNotes.jpeg" alt="repositorie of project notes mark" /></a>
        <a href="https://password-generator-eramoss.vercel.app/"><ImageRatio title="Password-Generator" FisrtRatio={9} SecondRatio={10} src="/passwordGenerator.png" alt="repositorie of project password generator" /></a>
        <a href="https://github.com/eramoss/Design-System"><ImageRatio title="Design System" FisrtRatio={9} SecondRatio={13} src="/designSystem.jpeg" alt="repositorie of a project Design System" /></a>
      </div>
      
      <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-center " >
        <a href="https://bon-coffee.vercel.app/"><ImageRatio title="Bon Coffe" FisrtRatio={9} SecondRatio={9} src="/Bon-coffe.png" alt="repositorie of project landing page" /></a>
        <div className="sm:-mt-36  ">
          <a href="https://github.com/eramoss/Front-end-Challenges/tree/main/expenses-chart-component-main"><ImageRatio  title="Expenses chart Component " FisrtRatio={9} SecondRatio={13} src="/Expenses-chart.jpg" alt="repositorie of project expenses chart component" /></a>
        </div>
        
        <div className="sm:-mt-10" >
          <a href="https://github.com/eramoss/weather-app"><ImageRatio  title="Weather App" FisrtRatio={9} SecondRatio={10} src="/Weather-App.jpeg" alt=" repositorie of project weather app" /></a>
        </div>
        
        </div>
        
    </div>
    
  )
}