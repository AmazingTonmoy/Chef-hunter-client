import React from 'react';
import Navbars from '../NavBar/Navbars';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            
           <Navbars></Navbars>
           <ToastContainer position="top-center" autoClose={1000} theme="colored"/>
           <Outlet></Outlet>
           <Footer></Footer>
           
            
        </div>
    );
};

export default Home;