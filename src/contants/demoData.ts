import { HomeStateType } from '../views/Home/HomeContext';

export const demoData: HomeStateType = {
  containers: [
    { id: 1, name: 'Lab 1' },
    { id: 2, name: 'Fridge 1', locationID: 1 },
    { id: 3, name: 'Fridge 2', locationID: 1 },
    { id: 4, name: 'Rack', locationID: 2 },
    { id: 5, name: 'Lab 2' },
    { id: 6, name: 'Fridge 1', locationID: 5 },
    { id: 7, name: 'Fridge 2', locationID: 5 },
    { id: 8, name: 'Rack', locationID: 6 },
    { id: 9, name: 'Rack', locationID: 6 },
    { id: 10, name: 'Rack', locationID: 6 },
  ],
  tubes: [
    { id: 1, locationID: 4 },
    { id: 2, locationID: 4 },
    { id: 3, locationID: 4 },
    { id: 4, locationID: 4 },
    { id: 5, locationID: 8 },
    { id: 6, locationID: 8 },
    { id: 7, locationID: 9 },
    { id: 8, locationID: 10 },
    { id: 9, locationID: 9 },
    { id: 10, locationID: 4 },
  ],
};
