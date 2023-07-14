import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestauraunt] = useState(null);
  const [restaurantMenu, setRestaurauntMenu] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_RESTAURANT_DETAILS + id);
    const json = await data.json();
    setRestauraunt(json?.data?.cards[0]?.card?.card?.info);
    setRestaurauntMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return [restaurant, restaurantMenu];
};

export default useRestaurant;
