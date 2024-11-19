import DancePage from '../pages/DancePage';
import HomePage from '../pages/HomePage';

const ROUTES = [
  {
    label: 'Home',
    path: '/',
    Component: HomePage,
  },
  {
    path: '/dance/:name',
    Component: DancePage,
  },
];

export default ROUTES;
