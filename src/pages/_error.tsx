import somethingWrong from '../assets/error500.png';
import Image from 'next/future/image';
import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';

export default function Custom500() {
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
        <div className="flex flex-col text-2xl lg:text-4xl items-center justify-center">
          <Image src={somethingWrong} alt="" width={440} height={440} />
          <h1 className="font-cursive text-cyan-100 mx-auto">
            500 | Algo deu errado!
          </h1>
        </div>
      </div>
    </>
  );
}
