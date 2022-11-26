import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const MoviesCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "16rem", margin: "15px 10px" }}>
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.title} </Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <div>
            <h2>reting State</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{movie.rate}</ListGroup.Item>
          <ListGroup.Item>{movie.year}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

/*const MoviesCard = (movie) => {
  return (
    <div>
      <Card style={{ width: '16rem', margin: "15px 10px" }}>
        <Card.Img variant="top" src={movies.img} />
        <Card.Body>
          <Card.Title>{movietitle} </Card.Title>
          <Card.Text>
            {movies.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{movie.date}</ListGroup.Item>
          <ListGroup.Item>{movie.duration}</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

      </Card>
    </div>
  )

}*/

export default MoviesCard;
