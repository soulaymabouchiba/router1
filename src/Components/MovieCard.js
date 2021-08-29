import React from 'react';
import {Card} from "react-bootstrap";
import {Rating} from "@material-ui/lab";
import {Link} from 'react-router-dom';

export const MovieCard = ({movie}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>{movie.date}</Card.Text>
            <Card.Text>{movie.type}</Card.Text>
            <Rating name="read-only" value={movie.rating} readOnly />
            </Card.Body>
            </Card>
        
        <div>
          <Card.Text> <Link to={{pathname:`/Trailer/${movie.name}`,Props:{name:movie.name,url:movie.url}}}>Trailer</Link> </Card.Text>
          <Card.Text> <Link to={{pathname:`/Description/${movie.name}`,Props:{name:movie.name,description:movie.description}}}>Description</Link> </Card.Text>

        </div>
        </div>
    )
}