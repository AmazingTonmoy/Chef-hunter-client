import React, { Suspense, lazy } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const CardOfChef = ({chef}) => {
  const {likes,name,id,recipes,experience,imgSrc} = chef
  const LazyImage = lazy(()=>import('./LazyImage'))
  
    
  
  
  return (
        <div className="col-md-4 mb-4">
        <Card className='bg-dark text-white'>
          <Suspense fallback={<div className="text-center">Please Wait</div>}>
          {/* <Card.Img variant="top" className='p-3 ' src={imgSrc} style={{ height: '350px', width: '100%' ,borderRadius:'10%' }} /> */}
          <LazyImage imgSrc={imgSrc}/>
          </Suspense >
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
               <p>Years of experience: {experience}</p>
               <p>Number of recipes: {recipes}</p>
               <p>Likes: {likes}</p>
            </Card.Text>
            <Link to={`/recipes/${id}`}>
            <Button variant="primary">View Recipes</Button>
            </Link>
            
          </Card.Body>
        </Card>
      </div>
    );
};

export default CardOfChef;