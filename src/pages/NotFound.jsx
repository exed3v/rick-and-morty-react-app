import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/NotFound.css";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="rm-notfound">
      <div className="rm-notfound__container">
        <h1 className="rm-notfound__code">404</h1>

        <h2 className="rm-notfound__title">Dimension Not Found</h2>

        <p className="rm-notfound__description">
          The page you are looking for doesn't exist in this universe.
        </p>

        <Link to="/" className="rm-notfound__button">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};
