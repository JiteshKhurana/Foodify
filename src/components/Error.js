import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { data, status, statusText } = err;
  return (
    <div>
      <h1>{status + " : " + statusText}</h1>
      <h2>{data}</h2>
    </div>
  );
};

export default Error;
