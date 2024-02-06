import React, { useContext } from 'react';
import Container from '../../Container/Container';
import { HomeContext } from '../../../views/Home/HomeContext';

export default function Header() {
  const { state } = useContext(HomeContext);
  return (
    <header>
      <Container $centerItems $direction='column'>
        <h1>Where is my test tube</h1>
        <h4>
          General concept of the application: The user has some predefined data (sorry no, time to
          build adding new content). Tubes are being held in containers. A container can be
          anything: a new rack, a whole storage compartment, a lab, or even a lab worker. Users can
          change a tube location, but also a user can change the location of a whole container of
          tubes. Entering the tube ID (for example by scanning the barcode) a user can get
          information about where it is.
        </h4>
        ------------------------------------------------
        <br />
        This is added just to show what data is in state
        <Container>
          <Container $direction='column'>
            Containers:
            {state.containers.map((c) => (
              <div key={c.id}>
                Name: <b>{c.name}</b>, ID: <b>{c.id}</b>, parent: <b>{c.locationID}</b>
              </div>
            ))}
          </Container>

          <Container $direction='column'>
            Tubes:
            {state.tubes.map((t) => (
              <div key={t.id}>
                ID: <b>{t.id}</b>, parent: <b>{t.locationID}</b>
              </div>
            ))}
          </Container>
        </Container>
        ------------------------------------------------
        <br />
        <br />
        <br />
      </Container>
    </header>
  );
}
