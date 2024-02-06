import React, { FC, PropsWithChildren } from 'react';
import Container from '../../Container/Container';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Container $center>{children}</Container>
    </main>
  );
};

export default Main;
