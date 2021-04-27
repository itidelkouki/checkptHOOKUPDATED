import React from 'react';
import {Card,ListGroup} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const ListMovie = (props) => {
  console.log(props.movies)
 
    return (
        <div className="movieCard"> {props.movies.map((el,i)=> 
          
    <Card key={i} style={{width: '18rem'}}>
       
    <Card.Img variant="top"  src={el.posterURL} height= "300px" width= '300'  />
  
    <Card.Body>
    <Card.Text className="card">{el.id}</Card.Text>
      <Card.Title className="cardTitle">{el.title}</Card.Title>
      <ListGroup className="list-group-flush">
    <StarRatingComponent value= {el.rate}/>
    </ListGroup>
      <Card.Text className="card-Text">{el.description}</Card.Text>
    </Card.Body>
    
    
    </Card> )}
      
        </div>
      );}

export default ListMovie;

