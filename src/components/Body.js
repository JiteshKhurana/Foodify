import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { useState } from "react";
import useOnline from "../utils/useOnline";
import useListOfRestaurants from "../utils/useListOfRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  ] = useListOfRestaurants();

  const isOnline = useOnline();

  if (!isOnline)
    return <h1>🚩Offline, please check your internet connection!!</h1>;

  if (!allRestaurants) return <h1>No Restaurants are Open at this Moment</h1>;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 my-3 space-x-4 flex justify-center">
        <input
          type="text"
          placeholder="Search a Restaurant you want..."
          className="w-96 pl-3 pr-10 py-2 rounded-lg border-2 border-red-500 hover:border-red-600 placeholder-gray-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length == 0 ? (
          <h1>No Match found for "{searchText}"</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
