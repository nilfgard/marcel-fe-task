import { ChangeEvent, useContext, useState } from 'react';
import { ContainerType } from '../../types/types';
import { HomeContext } from '../Home/HomeContext';
import { getStackedLocations } from '../../helpers/tubeLocation';

const useFindMyTube = () => {
  const [tubeLocation, setTubeLocation] = useState<ContainerType[]>();
  const { state } = useContext(HomeContext);

  // TODO: add Debouncing
  const onInput = (v: ChangeEvent<HTMLInputElement>) => {
    if (v.target.value === '') {
      setTubeLocation(undefined);
      return;
    }

    const tubeID = Number(v.target.value);
    const foundTube = state.tubes.find((t) => t.id === tubeID);

    if (foundTube?.locationID) {
      const parent = state.containers.find((c) => c.id === foundTube?.locationID);
      setTubeLocation(getStackedLocations(parent ? [parent] : [], state.containers));
    } else {
      setTubeLocation([]);
    }
  };

  return {
    onInput,
    tubeLocation,
  };
};

export default useFindMyTube;
