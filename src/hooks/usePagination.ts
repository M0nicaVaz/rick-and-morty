import axios from 'axios';

export default async function usePagination(page: string | null) {
  if (page === null) {
    return;
  }

  const { data } = await axios.get(page);
  const { info, results } = data;
  const { prev, next } = info;

  const updatedCharacters = results.map((result: any) => {
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
