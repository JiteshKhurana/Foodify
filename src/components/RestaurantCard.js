import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="w-64 p-3 m-4 rounded-xl h-72 border-2 border-gray-200 hover:border-red-300 hover:shadow-lg ">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-lg" />
      <h2 className="font-medium text-lg mt-2">{name}</h2>
      {cuisines.length < 3 ? (
        <p className="font-light text-sm text-gray-500">
          {cuisines.join(", ")}
        </p>
      ) : (
        <p className="font-light text-sm text-gray-500">
          {cuisines[0] + ", " + cuisines[1] + ", " + cuisines[2]}
        </p>
      )}
      <div className="flex justify-between my-3">
        {avgRating < 4 ? (
          <div className="bg-orange-600 rounded-sm p-1">
            <h4 className=" text-white text-xs">★ {avgRating}</h4>{" "}
          </div>
        ) : (
          <div className="bg-green-500 rounded-sm p-1">
            <h4 className=" text-white text-xs">★ {avgRating}</h4>{" "}
          </div>
        )}
        <h4 className="text-xs text-gray-500 my-1">{slaString}</h4>{" "}
        <h4 className="text-xs text-gray-500 my-1">{costForTwoString}</h4>{" "}
      </div>
    </div>
  );
};

export default RestaurantCard;
