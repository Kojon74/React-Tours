import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Button, Card } from "react-bootstrap";
import "./Tour.css";

const Tour = ({ removeTour, id, name, info, image, price }) => {
  return (
    <Card className="tour" key={id}>
      <Card.Img className="img" variant="top" src={image} alt="img" />
      <Card.Body>
        <div className="tour-header">
          <Card.Title className="name">{name}</Card.Title>
          <Card.Title className="price">${price}</Card.Title>
        </div>
        <Card.Text className="info">{info}</Card.Text>
        <Button
          className="btn"
          variant="primary"
          onClick={() => removeTour(id)}
        >
          Not interested
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Tour;
