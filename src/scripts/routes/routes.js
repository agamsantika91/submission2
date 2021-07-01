import Restaurants from '../views/pages/restoran';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
