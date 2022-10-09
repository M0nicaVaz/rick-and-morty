import loadingImg from '../assets/loading.gif';
import Image from 'next/future/image';

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-1 mx-auto">
      <Image src={loadingImg} alt="" width={140} height={140} />
      <span className="text-cyan-300 font-cursive text-xl">Carregando...</span>
    </div>
  );
}
