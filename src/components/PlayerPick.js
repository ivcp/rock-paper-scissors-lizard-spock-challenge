import React from 'react';
import Icon from './UI/Icon';

const PlayerPick = ({ name }) => {
  return <Icon big name={name} color={name} />;
};

export default PlayerPick;
