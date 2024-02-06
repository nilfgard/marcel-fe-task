import { ContainerType, TubeType } from '../types/types';

export const getStackedLocations = (
  stackedLocations: ContainerType[],
  allContainers: ContainerType[],
) => {
  try {
    return stackLocations(stackedLocations, allContainers);
  } catch (e) {
    alert(
      'Error! Probably you managed to set child container as parent of its parent container. We will cover this bug in future :) ',
    );
  }
};
export const stackLocations = (
  stackedLocations: ContainerType[],
  allContainers: ContainerType[],
): ContainerType[] => {
  const lastLocation = stackedLocations.at(-1);
  if (!lastLocation?.locationID) return stackedLocations;

  const foundParent = allContainers.find((c) => c.id === lastLocation.locationID);
  if (!foundParent) return stackedLocations;

  return stackLocations([...stackedLocations, foundParent], allContainers);
};

export const getChangedTubes = (
  tubes: TubeType[],
  itemID: number,
  newContainer: ContainerType | undefined,
) => {
  const foundTube = tubes.find((t) => t.id === itemID);

  if (foundTube && newContainer) {
    foundTube.locationID = newContainer.id;
  } else {
    alert('Incorrect data!');
  }

  return tubes;
};

export const getChangedContainers = (
  containers: ContainerType[],
  itemID: number,
  newContainer: ContainerType | undefined,
) => {
  const foundContainer = containers.find((t) => t.id === itemID);

  if (foundContainer && newContainer && foundContainer.id !== newContainer.id) {
    foundContainer.locationID = newContainer.id;
  } else {
    alert('Incorrect data!');
  }

  return containers;
};
