import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeList from './RecipeList';

const Recipes = () => {
    const recipeInfo = useLoaderData();
    const {id,name,experience,recipes,likes,imgSrc,bio} = recipeInfo
    return ( 
        
        <div className='bg-secondary p-3'>
        <div className='container mt-4 mb-4 bg-dark text-white p-3 rounded'>

 <Row className="banner">
      <Col md={4}>
        <Image src={imgSrc} alt={`${name}'s profile picture`} style={{ height: '300px', width: '300px' ,borderRadius:'50%' }} fluid />
      </Col>
      <Col md={8}>
        <h2>{name}</h2>
        <p>{bio}</p>
        <ul>
          <li>{likes} Likes</li>
          <li>{recipes} Recipes</li>
          <li>{experience} Years of Experience</li>
        </ul>
      </Col>
    </Row>
   
   
            
            
            
        </div>
        
        <RecipeList name={name}></RecipeList>
        </div>
    );
};

export default Recipes;