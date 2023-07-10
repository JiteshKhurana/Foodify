import { restaurantlist } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
          value=""
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantlist.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
