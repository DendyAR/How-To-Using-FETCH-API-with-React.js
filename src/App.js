import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const API = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data[0]);
      });
  }, []);

  return (
    <>
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Card.Img variant="top" src={photos.url} />
        <Card.Body>
          <Card.Title>{photos.id}</Card.Title>
          <Card.Text>{photos.title}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
