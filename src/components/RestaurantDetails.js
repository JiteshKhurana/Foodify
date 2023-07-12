import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestauraunt] = useState(null);
  const [restaurantMenu, setRestaurauntMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3199757&lng=75.3353875&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestauraunt(json?.data?.cards[0]?.card?.card?.info);
    setRestaurauntMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>{restaurant?.name}</h1>
        <h3>{restaurant?.cuisines?.join(",")}</h3>
        <h3>{restaurant?.locality + " " + restaurant.city}</h3>
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
