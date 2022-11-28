

import {HiArrowLongDown} from 'react-icons/hi2'
import Socialmedia from './SocialMedia'


export default function Footer() {
  return (
    <div className='w-full'>
      <Socialmedia className='pl-3 flex gap-4'/>


      <div className='flex flex-col items-center '>
        <p>scroll</p>
        <HiArrowLongDown className='animate-bounce duration-700' />
      </div>
    </div>
  )
}