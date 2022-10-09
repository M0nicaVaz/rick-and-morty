/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/future/image';

import { api } from '../services/api';
import heroImg from '../assets/hero.png';
import DataNotFound from '../components/DataNotFound';
import CharacterCard from '../components/CharacterCard';

interface HomeProps {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  characters: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episode: number;
  }[];
}

export default function Home({ info, characters }: HomeProps) {
  const [userSearch, setUserSearch] = useState<string>('');
  const [characterNotFound, setCharacterNotFound] = useState<boolean>(false);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    async function getSearchedCharacter() {
      if (userSearch) {
        try {
          const { data } = await api.get(`character/?name=${userSearch}`);
          setCharacterNotFound(false);

          return data.results;
        } catch (err) {
          setCharacterNotFound(true);

          console.log(err.message);
          return null;
        }
      } else {
        setCharacterNotFound(false);
        setFilteredCharacters(characters);
        return null;
      }
    }

    getSearchedCharacter().then((characterFound) => {
      if (characterFound) {
        setFilteredCharacters(characterFound);
      }
    });
  }, [userSearch]);

  return (
    <>
      <Head>
        <title>Rick & Morty | Guia Definitivo</title>
      </Head>

      <div className="mx-auto px-4 mb-5 flex flex-col items-center justify-center w-full gap-1 bg-gray-900 ">
        <section className="flex items-center justify-center flex-wrap gap-6 text-center w-full rounded-lg">
          <Image
            src={heroImg}
            width={440}
            height={440}
            alt="Rick e Morty saindo de um portal verde"
          />
          <h1 className="font-cursive text-4xl md:text-5xl lg:text-6xl text-cyan-400">
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
              onChange={(e) => setUserSearch(e.target.value)}
              value={userSearch}
              type="text"
              placeholder="Ex: Rick"
              className="mx-auto w-11/12 max-w-md bg-gray-800 rounded font-cursive border-b-2 text-center border-lime-300 text-cyan-400 text-2xl p-2 focus:outline-none focus:shadow focus:shadow-lime-400"
            />
          </div>

          <div className="mx-auto w-11/12 lg:w-full py-2 px-2 bg-gradient-to-br from-lime-400 to-cyan-400 mt-20 rounded">
            <section
              className="w-full flex flex-wrap gap-6 items-center justify-center flex-1 px-4 p-4 h-[20.975rem]
            overflow-auto bg-gray-900"
            >
              {characterNotFound ? (
                <DataNotFound />
              ) : (
                filteredCharacters.map((character) => {
                  return (
                    <CharacterCard key={character.id} character={character} />
                  );
                })
              )}
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/character');
  const { info, results } = data;

  const characters = results.map((result: any) => {
    return {
      id: result.id,
      name: result.name,
      status: result.status,
      species: result.species,
      gender: result.gender,
      origin: result.origin.name,
      location: result.location.name,
      image: result.image,
      episodes: result.episode.length,
    };
  });

  return {
    props: {
      info,
      characters,
    },
    revalidate: 60 * 60 * 2,
  };
};
