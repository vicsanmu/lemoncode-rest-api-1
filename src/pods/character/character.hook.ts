import * as React from 'react';
import { getCharacter } from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const useCharacter = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const loadCharacter = (id: string) => {
    getCharacter(id).then((result) =>
      setCharacter(mapCharacterFromApiToVm(result))
    );
  };

  return { character, loadCharacter };
};
