import NotFoundImg from '../assets/notfound.gif';
import Image from 'next/future/image';

export default function DataNotFound() {
  return (
    <div className="flex flex-col items-center gap-1 mx-auto">
      <Image src={NotFoundImg} alt="" width={140} height={140} />
      <span className="text-cyan-300 font-cursive text-xl">
        Desculpa. Não encontrei.
      </span>
    </div>
  );
}
