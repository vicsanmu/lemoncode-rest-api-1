import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { useCharacter } from './character.hook';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const { character, loadCharacter } = useCharacter();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      loadCharacter(id);
    }
  }, []);

  return <CharacterComponent character={character} />;
};
