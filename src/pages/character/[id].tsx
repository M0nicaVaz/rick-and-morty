import { useRouter } from 'next/router';
import Image from 'next/future/image';

import logoImg from '../../assets/logo.png';
import rickmorty from '../../assets/1.jpeg';
import Link from 'next/link';

export default function Character() {
  const { query } = useRouter();
  return (
    <>
      <Link href="/">
        <a className="text-lime-200 fixed top-4 left-4 cursor-pointer hover:text-cyan-300 bg-gray-900/90 z-50 rounded py-1 px-2">
          Voltar
        </a>
      </Link>

      <div className="w-full p-4 pb-6 gap-10">
        <Image
          src={logoImg}
          alt=""
          width={380}
          height={380}
          className="mx-auto mb-10"
        />

        <main className="flex flex-wrap items-center justify-center gap-20">
          <Image
            src={rickmorty}
            alt=""
            width={280}
            height={280}
            className="w-10/12 max-w-xs rounded outline-double outline-8 outline-lime-300 -rotate-6 "
          />

          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-cursive text-6xl text-cyan-300 mb-4">
              Rick Sanchez
            </h1>
            <span className="block text-xl text-white">Alive</span>
            <span className="block text-xl text-white">Human</span>
            <span className="block text-xl text-white">Earth (C-137)</span>
            <span className="block text-xl text-white">Citadel of Ricks</span>
            <span className="block text-xl text-white">51 episodes</span>
          </div>
        </main>
      </div>
    </>
  );
}
