import React from 'react';
import reviewImg from './../../../assets/images/review.jpg'

const ExtraSection2 = () => {
    return (
        <div  style={{ height: '300px', backgroundImage: `url(${reviewImg})`, backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'white',marginTop:"100px" }}>
        <div className='row container'>

            
            
            
            <div className='col-12 col-lg-6 d-flex gap-5 justify-content-around text-center container extra' >

                
               
                <div >
                    <h1>10</h1>
                    <h3 className='text-warning'>Post</h3>
                </div>
                <div >
                    <h1>25</h1>
                    <h3 className='text-warning'>Retweet</h3>
                </div>

                </div>

                {/* ............................. */}
               
               
                <div className='col-12 col-lg-6 d-flex gap-5 justify-content-around text-center container extra'>
                {/* ...................... */}
               
               
                     <div >
                    <h1>42</h1>
                    <h3 className='text-warning'>Chefs</h3>
                      </div>
               
                    <div >
                    <h1>57</h1>
                    <h3 className='text-warning'>Meals</h3>
                     </div>

               
           
            </div>
           
           
           
    </div>
     </div>
    );
};

export default ExtraSection2;