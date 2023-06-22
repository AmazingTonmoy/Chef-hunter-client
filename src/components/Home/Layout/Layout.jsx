import React, { useEffect, useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import CardOfChef from './CardOfChef';
import { Spinner } from 'react-bootstrap';
import HomeBanner from './HomeBanner';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import Review from './Review';


const ChefSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const chefs = useLoaderData();

  // When the chefs data reloads, update the loading state
  useEffect(() => {
    setIsLoading(false);
  }, [chefs]);

  return (
    <div className='container-full bg-secondary pb-5'>
      <HomeBanner></HomeBanner>
      <div className="container bg-secondary">
        
        <h2 className='text-center text-white fw-bold pt-5 mt-5'>Our Great Chefs</h2>
        <hr />
        {isLoading ? (
          <div className='text-center mt-5'>
          <Spinner animation="border" role="status" variant="success">
         <span className="sr-only">Loading...</span>
       </Spinner>
     </div>
        ) : (
          <div className="row">
            {chefs.map((chef) => (
              <CardOfChef key={chef.id} chef={chef}></CardOfChef>
            ))}
          </div>
        )}
        <ExtraSection1></ExtraSection1>
        
       
      </div>
      <ExtraSection2></ExtraSection2>

      
        <Review></Review>
      
    </div>
  );
};

export default ChefSection;
