import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Tour from "./Tour";
import "./CenterContainer.css";

const url = "https://course-api.com/react-tours-project";

const CenterContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refresh = () => {
    window.location.reload();
    return false;
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) return resp.json();
        else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((tours) => {
        setTours(tours);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) return <h1 className="loading-error">Loading...</h1>;
  if (isError) return <h1 className="loading-error">Error...</h1>;
  return (
    <div className="center-container">
      <h1 className="title">
        Our Tours
        <div className="underline" />
      </h1>
      {tours.map((tour) => {
        return <Tour removeTour={removeTour} {...tour} />;
      })}
      {tours.length === 0 && (
        <Button className="refresh-btn" onClick={refresh}>
          Refresh
        </Button>
      )}
    </div>
  );
};

export default CenterContainer;
