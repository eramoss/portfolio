import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';


interface AspectRatioProps {
  src: string
  alt: string
  FisrtRatio: number
  SecondRatio: number
  title?: string
}

const ImageRatio = ({src, alt,FisrtRatio,SecondRatio, title}: AspectRatioProps) => (
  <div className="w-80 rounded overflow-hidden shadow">
    <AspectRatio.Root ratio={ FisrtRatio / SecondRatio }>
      <img
        className="object-cover w-full h-full  "
        src={src}
        alt={alt}
      />
      <div className='h-full w-full  absolute top-0 hover:opacity-100 hover:bg-opacity-30 bg-black opacity-0 bg-opacity-40 duration-500 transition-all  '>

          <h1 className=' text-white font-semibold absolute bottom-0 left-1' >{title}</h1>
      </div>
      
    </AspectRatio.Root>
  </div>
);

export default ImageRatio;
