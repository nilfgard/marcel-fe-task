import { ChangeEvent, useContext } from 'react';
import { HomeContext } from '../Home/HomeContext';
import { getChangedContainers, getChangedTubes } from '../../helpers/tubeLocation';

const useTubePlacement = () => {
  const {
    state: { tubes, containers },
    setState,
  } = useContext(HomeContext);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isContainer = e.currentTarget.isContainer?.checked;
    const itemID = Number(e.target.tube?.value);
    const newContainerID = Number(e.target.container?.value);
    const newParentContainer = containers.find((t) => t.id === newContainerID);

    if (isContainer) {
      setState({
        tubes,
        containers: getChangedContainers(containers, itemID, newParentContainer),
      });
    } else {
      setState({
        containers,
        tubes: getChangedTubes(tubes, itemID, newParentContainer),
      });
    }
  };

  return { onSubmit };
};

export default useTubePlacement;
