import Head from 'next/head';
import Image from 'next/future/image';

import heroImg from '../assets/hero.png';
import rickmorty from '../assets/1.jpeg';
import Link from 'next/link';
import Loading from '../components/Loading';
import DataNotFound from '../components/DataNotFound';

export default function Home() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <Head>
        <title>Rick & Morty | Guia Definitivo</title>
      </Head>

      <div className="mx-auto px-4 mb-5 flex flex-col items-center justify-center w-full gap-1 bg-gray-900">
        <section className="flex items-center justify-center flex-wrap gap-6 text-center w-full rounded-lg">
          <Image
            src={heroImg}
            width={440}
            height={440}
            alt="Rick e Morty saindo de um portal verde"
          />
          <h1 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-cyan-300 relative">
            Guia definitivo <br /> de Personagens
          </h1>
        </section>

        <main className="w-full mx-auto flex-1 pt-10 pb-4">
          <div className="flex flex-col items-center gap-2 ">
            <label
              htmlFor="searchCharacter"
              className="text-lime-300  md:text-lg"
            >
              Digite o nome de um personagem
            </label>
            <input
              id="searchCharacter"
              type="text"
              placeholder="Ex: Rick"
              className="mx-auto w-11/12 max-w-md bg-gray-800 rounded font-cursive border-b-2 text-center border-lime-300 text-cyan-400 text-2xl p-2 focus:outline-none focus:shadow focus:shadow-lime-400"
            />
          </div>

          <div className="mx-auto w-11/12 lg:w-full py-2 px-2 bg-gradient-to-br from-lime-400 to-cyan-400 mt-20 rounded">
            <section className="w-full flex flex-wrap gap-4 items-center justify-center lg:justify-between flex-1 px-4 p-4 h-80 overflow-auto bg-gray-900">
              {arr.map((item) => {
                return (
                  <Link key={item} href={`/character/${item}`}>
                    <a className="bg-cyan-900 w-60 h-72 rounded text-zinc-200 font-bold flex flex-col items-center justify-between py-2 px-4 cursor-pointer">
                      <h1 className="font-cursive text-3xl text-white">
                        Rick Sanchez
                      </h1>

                      <Image
                        src={rickmorty}
                        alt=""
                        width={120}
                        height={120}
                        className="rounded object-cover object-center "
                      />

                      <footer className="text-center">
                        <span className="block">Alive</span>
                        <span className="block">Human</span>
                        <span className="block">Male</span>
                      </footer>
                    </a>
                  </Link>
                );
              })}
            </section>
          </div>
        </main>

        <div className="flex gap-4">
          <button className="text-zinc-200 text-md hover:text-lime-300">
            Anterior
          </button>
          <button className="text-zinc-200 text-md hover:text-lime-300">
            Próxima
          </button>
        </div>
      </div>
    </>
  );
}
