import axios from 'axios';
import { useState } from 'react';

interface Page {
  prevPage: null | string;
  nextPage: null | string;
  currentPageNumber: number;
}

export default function usePagination() {
  const initialNextPageUrl = 'https://rickandmortyapi.com/api/character?page=2';

  const [updatedCharacters, setUpdatedCharacters] = useState<Character[]>([]);

  const [page, setPage] = useState<Page>({
    prevPage: null,
    nextPage: initialNextPageUrl,
    currentPageNumber: 1,
  });

  async function getPaginationData(pageState: string | null) {
    if (pageState === null) {
      return;
    }

    const { data } = await axios.get(pageState);
    const { info, results } = data;
    const { prev, next } = info;

    const updatedCharacters: Character[] = results.map((result: any) => {
      return {
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image: result.image,
      };
    });

    return {
      updatedCharacters,
      prev,
      next,
    };
  }

  function resetPage() {
    setUpdatedCharacters([]);
    setPage({
      prevPage: null,
      nextPage: initialNextPageUrl,
      currentPageNumber: 1,
    });
  }

  async function prevPage() {
    const { updatedCharacters, prev, next } = await getPaginationData(
      page.prevPage
    );

    if (updatedCharacters) {
      setUpdatedCharacters(updatedCharacters);
    }

    const current = prev
      ? prev.replace('https://rickandmortyapi.com/api/character?page=', '')
      : 0;
    setPage({
      prevPage: prev,
      nextPage: next,
      currentPageNumber: Number(current) + 1,
    });

    return { updatedCharacters };
  }

  async function nextPage() {
    const { updatedCharacters, prev, next } = await getPaginationData(
      page.nextPage
    );

    if (updatedCharacters) {
      setUpdatedCharacters(updatedCharacters);
    }

    const current = next
      ? next.replace('https://rickandmortyapi.com/api/character?page=', '')
      : '';

    setPage({
      prevPage: prev,
      nextPage: next,
      currentPageNumber: Number(current) - 1,
    });

    return { updatedCharacters };
  }

  return {
    resetPage,
    prevPage,
    nextPage,
    page,
  };
}
