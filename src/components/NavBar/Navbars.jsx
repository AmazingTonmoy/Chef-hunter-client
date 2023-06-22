import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navbars.css'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

const Navbars = () => {
 
  const {user,logOut,auth,loading} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut(auth)
    .then(result =>{
      console.log(result)
      toast.warning('Log Out Successful');
      
    })
    .catch(error =>{
      console.log(error)
    })
    
  }

  // log out
 






  // loader
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5 pb-2">
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  
  return (
    
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand className='fw-bold' href="/">Chef Bazar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Use the 'me-auto' class on the first Nav component to push the links to the left */}
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end">
            <NavLink className='nav-link'  to="/" >
              Home
            </NavLink>
            <NavLink className='nav-link' to="/blog" >
              Blog
            </NavLink>
           
            <div className='all-btn'>
             
              
            {user ? (
             
             
                
             <div className='imgBtn'>
             {user.photoURL  ? (
               <img src={user.photoURL} alt="logo" className='pro-image' title={user.displayName} />
             ) : (
               <h6 className='text-white  me-5 mt-2 pt-1'>{user.displayName}</h6>
             )}
             <NavLink className='nav-link'><Button onClick={handleLogOut}>Log Out</Button></NavLink>
           </div>
                  
              
            ) : (
              
                <div className='logReg d-flex'>
                
                    <NavLink className='nav-link ' to="/login">
                      Login
                    </NavLink>
                  
                
                   
                    <NavLink className='nav-link' to="/register">
                      Sign Up
                    </NavLink>

                    
                  </div>
              
             
            )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
