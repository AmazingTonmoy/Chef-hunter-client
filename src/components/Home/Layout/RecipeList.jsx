import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import RecipesTable from './RecipesTable';

const RecipeList = ({name}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-jerrytonmoy-gmailcom.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                setItems([data]);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div className='container pt-3'>
             <h3 className='text-center text-white container pb-3'>{name} Recipes Information</h3>
             {isLoading ? (
                <div className='text-center mt-5'>
                     <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
               
             ) : (
                <Row>
                  <Col md={12}>
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Ingredients</th>
                                <th>Cooking Method</th>
                                <th>Rating</th>
                                <th>Favorite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item =>
                                    <RecipesTable key={item.id} item={item}></RecipesTable>
                                )
                            }
                        </tbody>
                    </Table>
                  </Col>
                </Row>
             )}
        </div>
    );
};

export default RecipeList;
