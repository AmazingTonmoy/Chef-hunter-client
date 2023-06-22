import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import reviewBG from './../../../assets/images/review-bg.jpg'
import man1 from './../../../assets/images/man-1.jpg'
import man2 from './../../../assets/images/man-2.jpg'
import man3 from './../../../assets/images/man-3.jpg'

const Review = () => {
  return (
    <div>
      <div
        style={{
          height: "600px",
          backgroundImage: `url(${reviewBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: 'white',
          marginTop: "100px",
        }}
      >
        <div className="text-center p-4">
          <h1 style={{ letterSpacing:"20px" }}>Reviews</h1>
          <h6 style={{ letterSpacing:"8px", fontFamily: 'arial' }} className="mt-4">Customer Experience</h6>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white",textAlign:"center" }}>
          <div className="p-5" style={{ width: "80%",height:"100%" }}>
            <Carousel>
              <Carousel.Item>
              <p style={{color:"#999999"}} >A talered chef's food can create a memorable gustatory experience that transcends the mere act ...</p>
              <img src={man1}alt="customer" style={{ borderRadius: "50%",width:'100px',height:'100px',marginLeft:"20px" }} />
                <p className="mb-5 pt-4 text-warning">Md Adnan</p>
                
              </Carousel.Item>
              <Carousel.Item>
              <p style={{color:"#999999"}}>The culinary expertise of a talented chef can leave a lasting impression on your palette, filling your...</p>
              <img src={man2}alt="customer" style={{ borderRadius: "50%",width:'100px',height:'100px',marginLeft:"20px" }} />
                <p className="mb-5 pt-4 text-warning">Kim Loren</p>
              </Carousel.Item>
              <Carousel.Item>
              <p style={{color:"#999999"}}>A skilled chef's food can create a memorable gustatory experience that transcends the mere act ...</p>
              <img src={man3}alt="customer" style={{ borderRadius: "50%",width:'100px',height:'100px',marginLeft:"20px" }} />
                <p className="mb-5 pt-4 text-warning">Mike Smith</p>
              </Carousel.Item>
            </Carousel>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Review;
