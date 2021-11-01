import React from 'react';

interface Props {
  name: string;
  isArriving?: boolean;
}

export const Greeting: React.FC<Props> = ({ name, isArriving }) => {
  return (
    <p>{isArriving ? 'Hi' : 'Bye'}, {name}</p>
  )
}
