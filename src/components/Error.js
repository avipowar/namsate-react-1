import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          {err.data || "An unexpected error occurred."}
        </p>
        <p className="error-code">
          {err.status} - {err.statusText}
        </p>
        <a href="/" className="error-link">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
