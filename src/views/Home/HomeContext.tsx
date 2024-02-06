import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react';
import { ContainerType, TubeType } from '../../types/types';
import { demoData } from '../../contants/demoData';

export interface HomeStateType {
  containers: ContainerType[];
  tubes: TubeType[];
}

export interface HomeContextType {
  state: HomeStateType;
  setState: Dispatch<SetStateAction<HomeStateType>>;
}

const emptyState = {
  state: {
    containers: [],
    tubes: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

export const HomeContext = createContext<HomeContextType>(emptyState);

const HomeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<HomeStateType>(demoData);

  return <HomeContext.Provider value={{ state, setState }}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
