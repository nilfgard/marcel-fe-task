import { FC } from 'react';
import { ContainerType } from '../../types/types';

interface TubeLocationListProps {
  location?: ContainerType[];
}

const TubeLocationList: FC<TubeLocationListProps> = ({ location }) => {
  if (!location) return null;

  return (
    <>
      {location.length === 0 ? (
        <h4>Sorry we couldn't find your tube</h4>
      ) : (
        <>
          <h4>Your tube is located:</h4>
          {location.map((location) => (
            <div key={location.id}>
              Name: {location.name}, ID: {location.id}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TubeLocationList;
