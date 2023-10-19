import { AiOutlineMinus } from 'react-icons/ai';

export default function Text() {
  return (
    <div className='flex flex-col bg-white text-3xl w-full gap-3 max-w-3xl items-start '>
      <div className=' font-bold flex gap-1  items-center mb-4'>
        <AiOutlineMinus />
        <h1>Hi!</h1>
      </div>

      <div className='gap-2 text-5xl inline-block'>
        <h1 className=''>
          I&apos;m <strong className='font-semibold '>Eduardo Ramos</strong>
        </h1>
      </div>

      <div className='flex flex-col gap-1'>
        <p>
        An Computer Science student with a wide variety of experience in software, server and network.
        </p>

        <p className='text-sm '>
          Sys-Admin at <a className='text-red-500' href="http://lite.acad.univali.br">UNIVALI - LITE</a>, creator and maintainer of <a className='text-red-500' href="https://github.com/eramoss/tachiyomi-extensions">MangaLivre extension for tachiyomi</a>
        </p>
      </div>
    </div>
  );
}
