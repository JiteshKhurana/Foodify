import shortid from "shortid";
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={shortid.generate()} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
