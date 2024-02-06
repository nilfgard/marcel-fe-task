import React from 'react';
import Container from '../../ui/Container/Container';
import Input from '../../ui/Input/Input';
import useFindMyTube from './useFindMyTube';
import TubeLocationList from '../../ui/TubeLocationList/TubeLocationList';

const FindMyTube = () => {
  const { onInput, tubeLocation } = useFindMyTube();

  return (
    <Container $direction='column' $centerItems>
      <Input type='number' placeholder='Enter tube ID to locate it' onChange={onInput} />

      <TubeLocationList location={tubeLocation} />
    </Container>
  );
};

export default FindMyTube;
