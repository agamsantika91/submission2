import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">RESTO FAVORITE</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
