import { Character } from './character.api-model';

const API_URL = 'https://rickandmortyapi.com/api/';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${API_URL}character/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const dataResponse = (await response.json()) as Character;
  return dataResponse;
};
