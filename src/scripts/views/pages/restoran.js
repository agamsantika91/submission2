import RestoDBSource from '../../data/restodb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">RESTAURANT</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Resto;
