import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      {cuisines.length < 3 ? (
        <h3>{cuisines.join(",")}</h3>
      ) : (
        <h3>{cuisines[0] + "," + cuisines[1] + "," + cuisines[2]}</h3>
      )}
      {avgRating == "--" ? <h4>Not Rated</h4> : <h4>{avgRating} Stars</h4>}
    </div>
  );
};

export default RestaurantCard;
