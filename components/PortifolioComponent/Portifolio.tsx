import Projects from "./projects";



export default function Portifolio() {
  return (

    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-4xl w-full text-center">Portfolio</h1>
      <Projects/>
    </div>
    
  )
}