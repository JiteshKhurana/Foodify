import shortid from "shortid";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-28">
      {Array(15)
        .fill("")
        .map((e) => (
          <div
            key={shortid.generate()}
            className="w-64 p-3 m-4 rounded-xl h-72 bg-gray-300"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
