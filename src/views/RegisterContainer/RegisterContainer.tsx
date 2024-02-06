import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import React from 'react';
import Input from '../../ui/Input/Input';

const RegisterContainer = () => {
  return (
    <Container $direction='column' $centerItems>
      <Input placeholder='Add container name' />
      <Button title='Register container' />
    </Container>
  );
};

export default RegisterContainer;
