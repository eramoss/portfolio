import { AiOutlineMinus } from 'react-icons/ai';

export default function Text() {
  return (
    <div className='flex flex-col bg-white text-3xl w-full gap-3 max-w-3xl items-start '>
      <div className=' font-bold flex gap-1  items-center mb-4'>
        <AiOutlineMinus />
        <h1>Oi!</h1>
      </div>

      <div className='gap-2 text-5xl inline-block'>
        <h1 className=''>
          Eu sou <strong className='font-semibold '>Eduardo Ramos</strong>
        </h1>
      </div>

      <div className='flex flex-col gap-1'>
        <p>
          Desenvolvedor Web, futuro Cientista da computação, Cursando Sistemas e
          grande entusiasta de tecnologia.
        </p>

        <p className='text-sm '>
          Não consigo falar tudo de mim em 3 linhas, então se quiser saber mais
          é só dar uma olhadinha mais pra baixo
        </p>
      </div>
    </div>
  );
}
