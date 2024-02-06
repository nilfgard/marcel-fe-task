import React from 'react';
import Main from '../../ui/layout/Main/Main';
import Header from '../../ui/layout/Header/Header';
import TubePlacement from '../TubePlacement/TubePlacement';
import FindMyTube from '../FindMyTube/FindMyTube';
import HomeContextProvider from './HomeContext';

const Home = () => {
  return (
    <HomeContextProvider>
      <Header />
      <Main>
        {/*<RegisterContainer />*/}
        <TubePlacement />
        <FindMyTube />
      </Main>
    </HomeContextProvider>
  );
};

export default Home;
