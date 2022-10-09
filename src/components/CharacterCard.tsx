import Image from 'next/future/image';
import Link from 'next/link';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link key={character.id} href={`/character/${character.id}`}>
      <a className="bg-gradient-to-br from-green-400/40 to-cyan-400/40 w-60 h-72 rounded text-zinc-200 font-bold flex flex-col items-center justify-center gap-4  p-4 cursor-pointer text-center">
        <Image
          src={character.image}
          alt={character.name}
          width={120}
          height={120}
          className="rounded object-cover object-center "
        />

        <h1 className="font-cursive text-3xl text-lime-300 tracking-wide leading-none drop-shadow-lg shadow-gray-900">
          {character.name}
        </h1>

        <footer>
          <span className="capitalize">{character.status}</span>
          <span> | {character.species} | </span>
          <span>{character.gender} </span>
        </footer>
      </a>
    </Link>
  );
}
