import somethingWrong from '../assets/error500.png';
import Image from 'next/future/image';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Link href="/">
        <a className="text-lime-200 fixed top-4 left-4 cursor-pointer hover:text-cyan-300 bg-gray-900 rounded p-1">
          Voltar
        </a>
      </Link>

      <div className="w-full h-screen grid place-content-center">
        <div className="flex flex-col text-2xl lg:text-4xl items-center justify-center">
          <Image src={somethingWrong} alt="" width={480} height={480} />
          <h1 className="font-cursive text-cyan-100 mx-auto">
            500 | Algo deu errado!
          </h1>
        </div>
      </div>
    </>
  );
}