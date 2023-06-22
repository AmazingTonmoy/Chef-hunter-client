import React from 'react';
import { Card } from 'react-bootstrap';

const LazyImage = ({imgSrc}) => {
    return (
       <div>
          <Card.Img variant="top" className='p-3 ' src={imgSrc} style={{ height: '350px', width: '100%' ,borderRadius:'10%' }} />
       </div> 
    );
};

export default LazyImage;
