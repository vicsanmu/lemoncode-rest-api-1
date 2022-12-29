import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const { name, gender, location, origin, species, status, type, image } =
    character;
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className="character-detail-title">
        <Avatar alt="Avatar" src={image} />
        <h1>{name}</h1>
      </div>
      <p>
        <b>Status: </b>
        <span>{status}</span>
      </p>
      <p>
        <b>Gender: </b>
        <span>{gender}</span>
      </p>
      <p>
        <b>Species: </b>
        <span>{species}</span>
      </p>
      <p>
        <b>Type: </b>
        <span>{type}</span>
      </p>
      <p>
        <b>Location: </b>
        <span>{location.name}</span>
      </p>
      <p>
        <b>Origin: </b>
        <span>{origin.name}</span>
      </p>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </div>
  );
};
