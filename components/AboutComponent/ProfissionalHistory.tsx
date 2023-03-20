export default function ProfissionalHistory() {
  return (
    <div className='flex flex-col items-start w-full gap-2'>
      <h1 className='text-lg underline p-4'>Expêrencias</h1>
      <p>
        Todas minhas experiências na área são com projetos Open Source e outros
        pessoais. Mas já participei de alguns cursos e intensivos como:{' '}
        <a
          href='https://www.entra21.com.br/'
          className='font-semibold underline'
        >
          Entra21 | ProWay
        </a>
        , um curso seletivo da região de Santa Catarina, que prepara estudantes,
        desde o nível básico até o mercado;{' '}
        <a href='alura.com' className='font-semibold underline'>
          Intensivo Front-end da alura
        </a>
        ; E os{' '}
        <a href='Rocketseat.com' className='font-semibold underline'>
          {' '}
          Ignite-Labs Da RocketSeat
        </a>
        .
      </p>

      <p>
        Também Possuo alguns projetos feitos, que estão apresentados a baixo.
        Alguns sozinhos e outros em conjunto, em todo projeto feito, eu sempre
        tentei evoluir e usar novas tecnologias. Desde HTML básico, para
        conseguir entender a semântica (que é extremamente importante em questão
        de acessibilidade) até o uso de{' '}
        <strong className='font-semibold'>React</strong> e as Bibliotecas{' '}
        <strong className='font-semibold'>JavaScript / TypeScript. </strong>
        Assim como possuo conhecimentos em:
        <strong className='font-semibold'> Next.js</strong>;
        <strong className='font-semibold'> Tailwindcss</strong>;
        <strong className='font-semibold'> Storybook</strong>;
        <strong className='font-semibold'> Vite</strong>;
        <strong className='font-semibold'> CSS puro </strong>
        entre outros...
      </p>
      <p>
        {' '}
        Todos eles estão no meu{' '}
        <a className='font-semibold' href='github.com/eramoss'>
          github
        </a>
      </p>
    </div>
  );
}
