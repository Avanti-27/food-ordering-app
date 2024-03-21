import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!</h2>
      <p>
        <strong>
          {err.status} : {err.statusText}
        </strong>
      </p>
    </div>
  );
};

export default Error;
