import { useRouter } from 'next/router';
import Image from 'next/future/image';

import { GetServerSideProps } from 'next';
import { api } from '../../services/api';

import logoImg from '../../assets/logo.png';
import rickmorty from '../../assets/1.jpeg';
import Link from 'next/link';
import Loading from '../../components/Loading';
import Head from 'next/head';

interface CharacterProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episode: number;
  };
}

export default function Character({ character }: CharacterProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{character.name} | Rick & Morty Guia</title>
      </Head>

      <Link href="/">
        <a className="text-lime-200 fixed top-4 left-4 cursor-pointer hover:text-cyan-300 bg-gray-900/90 z-50 rounded py-1 px-2 ">
          Voltar
        </a>
      </Link>

      <div className="w-full p-4 pb-6 gap-10">
        <Image src={logoImg} alt="" width={400} className="mx-auto" />

        <main className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 p-4">
          <Image
            src={character.image}
            alt={character.name}
            width={256}
            height={256}
            className="rounded outline-double outline-8 outline-lime-300 -rotate-6 "
          />

          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-cursive text-6xl text-cyan-300 mb-4">
              {character.name}
            </h1>
            <span className="block text-xl text-white">{character.status}</span>
            <span className="block text-xl text-white">
              {character.species}
            </span>
            <span className="block text-xl text-white">{character.origin}</span>
            <span className="block text-xl text-white">
              {character.location}
            </span>
            <span className="block text-xl text-white">
              {`${character.episode} episódio(s)`}
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const { data } = await api.get(`/character/${id}`);

  const character = {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
    origin: data.origin.name,
    location: data.location.name,
    image: data.image,
    episode: data.episode.length,
  };

  return {
    props: {
      character,
    },
  };
};
