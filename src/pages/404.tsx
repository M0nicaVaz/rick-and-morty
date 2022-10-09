import notFoundImg from '../assets/rm404.png';
import Image from 'next/future/image';
import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';

export default function Custom404() {
  return (
    <>
      <Link href="/">
        <a
          title="Voltar"
          className="text-lime-200 fixed top-4 left-4 cursor-pointer hover:text-cyan-300 bg-gray-900/90 z-50 rounded py-1 px-2 "
        >
          <ArrowLeft size={22} />
        </a>
      </Link>

      <div className="w-full h-screen grid place-content-center">
        <div className="flex flex-wrap text-2xl lg:text-4xl items-center justify-center">
          <Image
            src={notFoundImg}
            alt=""
            width={480}
            height={480}
            priority={true}
          />
          <h1 className="font-cursive text-cyan-100 mx-auto">
            404 | Não há nada para ver aqui!
          </h1>
        </div>
      </div>
    </>
  );
}
