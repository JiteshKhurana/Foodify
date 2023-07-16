import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="ml-52 mr-52">
      <div className="flex justify-between">
        <div className="mb-10 space-y-5">
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
        <img
          className="h-60 rounded-xl border-2 border-gray-800 mt-14"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant.cloudinaryImageId
          }
        />
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-10">
          Recommended({restaurantMenu?.length})
        </h2>
        <ul>
          {restaurantMenu?.map((restaurant) => {
            const { name, imageId, price, id } = restaurant?.card?.info;
            return (
              <li key={id} className="flex flex-wrap justify-between mb-5">
                <div>
                  <h3>{name}</h3>
                  <h4>{"₹ " + price / 100}</h4>
                </div>
                <div>
                  <img
                    className="h-28 rounded-xl"
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
