import { RESTAURANT_LIST } from "../constants";
import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  ];
};

export default useListOfRestaurants;
