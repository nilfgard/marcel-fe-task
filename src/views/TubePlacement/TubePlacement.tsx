import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import React from 'react';
import Input from '../../ui/Input/Input';
import useTubePlacement from './useTubePlacement';

const TubePlacement = () => {
  const { onSubmit } = useTubePlacement();

  return (
    <form onSubmit={onSubmit}>
      <Container $direction='column' $centerItems>
        <Input
          id='isContainer'
          type='checkbox'
          label={`Select this if you're scanning a container`}
        />
        <Input placeholder='Arrived tube/container ID' id='tube' />
        <Input placeholder='Location/container ID' id='container' />

        <Button title='Set container for tube/container' />
      </Container>
    </form>
  );
};

export default TubePlacement;
