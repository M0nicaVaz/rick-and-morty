import Image from 'next/future/image';
import { motion } from 'framer-motion';

import { GetServerSideProps } from 'next';
import { api } from '../../services/api';

import logoImg from '../../assets/logo.png';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, Translate } from 'phosphor-react';
import CharacterInfo from '../../components/CharacterInfo';

interface CharacterProps {
  character: Character;
}

export default function Character({ character }: CharacterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{character.name} | Rick & Morty Guia</title>
      </Head>

      <Link href="/">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          title="Voltar"
          className="text-lime-200 fixed top-4 left-4 cursor-pointer hover:text-cyan-300 bg-gray-900/90 z-50 rounded py-1 px-2 "
        >
          <ArrowLeft size={22} />
        </motion.a>
      </Link>

      <div className="w-full p-4 pb-6 gap-10 ">
        <Image
          src={logoImg}
          alt="Rick and Morty"
          width={400}
          priority={true}
          className="mx-auto"
        />

        <main className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 p-4">
          <Image
            src={character.image}
            alt={character.name}
            width={256}
            height={256}
            className="rounded outline-double outline-8 outline-lime-300 -rotate-6 "
          />

          <div className="flex flex-col gap-2 items-center text-center">
            <h1 className="font-cursive text-6xl text-cyan-300 mb-4 drop-shadow-md shadow-lime-300">
              {character.name}
            </h1>

            <CharacterInfo title="Status" description={character.status} />
            <CharacterInfo title="Gênero" description={character.gender} />
            <CharacterInfo title="Espécie" description={character.species} />
            <CharacterInfo
              title="Local de origem"
              description={character.origin}
            />
            <CharacterInfo title="Mora em" description={character.location} />
            <CharacterInfo
              title="Quantidade de episódios"
              description={character.episode}
            />
          </div>
        </main>
      </div>
    </motion.div>
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
