import { Font } from '@react-pdf/renderer';
import React from 'react';
import {  Button } from 'react-bootstrap';
import banner from '../../../assets/images/chef-banner.jpg'

const HomeBanner = () => {
    return (
        <div style={{ height: '400px', backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '50px',borderRadius:'10%'   }}>
                <h1 className=' fw-bold ' >Welcome To Chef Bazar</h1>
                <p className='fw-bold'>Explore the World of Cooking with Chef Bazar</p>
                <Button variant="primary">Get started</Button>
            </div>
        </div>
    );
};
export default HomeBanner

