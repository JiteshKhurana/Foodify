import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1 className="font-bold text-4xl">{restaurant?.name}</h1>
        <h3 className="font-light text-gray-500">
          {restaurant?.cuisines?.join(",")}
        </h3>
        <h3 className="font-light text-gray-500">
          {restaurant?.locality + " " + restaurant.city}
        </h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <h3>⭐️ {restaurant?.avgRating}</h3>
        <h4>{restaurant?.totalRatingsString}</h4>
        <h4>{restaurant?.sla?.lastMileTravelString}</h4>
      </div>
      <div>
        <h2>Recommended({restaurantMenu?.length})</h2>
        <ul>
          {restaurantMenu?.map((restaurant) => {
            const { name, imageId, price, id } = restaurant?.card?.info;
            return (
              <li key={id} className="restaurant-menu">
                <div>
                  <h3>{name}</h3>
                  <h4>{"₹ " + price / 100}</h4>
                </div>
                <div>
                  <img
                    className="restaurant-menu-image"
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      imageId
                    }
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
