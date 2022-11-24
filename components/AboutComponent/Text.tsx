import PersonalHistory from "./PersonalHistory";
import ProfissionalHistory from "./ProfissionalHistory";

export default function Text() {
  return (
    <div className='flex flex-col items-start py-16 w-full gap-2'>
      <PersonalHistory/>
      <ProfissionalHistory/>
    </div>
  )
}