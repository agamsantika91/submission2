import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="resto_name">${restaurant.name}</h2>
  <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto_info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    
  </div>
  <div class="resto_desc">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto_desc">
  <h3>Customer Reviews (${restaurant.customerReviews.length} Reviewers)</h3>
  ${restaurant.customerReviews
    .map(
      (review) => `
      <p>${review.name} : 
      ${review.review}
      (${review.date})</p>
    `,
    ).join('')}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="resto-collection">
    <div class="resto-collection_header">
        <img class="resto-collection_header_img" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="resto-collection_header_rating">
        <span>
                               <i class = "fas fa-star"></i>
                            </span>
                            <span>
                                <i class = "fas fa-star"></i>
                            </span>
                            <span>
                                <i class = "fas fa-star"></i>
                            </span>
                            <span>
                                <i class = "fas fa-star"></i>
                            </span>
                            <span>
                                <i class = "far fa-star"></i>
                            </span>
            <span class="resto-collection_header_rating_score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="resto-collection_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
        <div class = "location">
          <div>
            <span tabindex="0"><i class = "fas fa-map-marked-alt"></i></span>
            <span tabindex="0">${restaurant.city}</span>
          </div>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restoran" id="likeButton" class="like">
    <i class="far fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restoran" id="likeButton" class="like">
    <i class="fas fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
