import {
  CharacterCollectionEntityApi,
  CharacterEntityApi,
} from './character-collection.api-model';

const API_URL = 'https://rickandmortyapi.com/api/';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(`${API_URL}character`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const dataResponse = (await response.json()) as CharacterCollectionEntityApi;
  return dataResponse.results;
};
