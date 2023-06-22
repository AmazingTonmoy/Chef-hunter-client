import React from "react";

import chefChoice from '../../../assets/images/food.jpg'

const ExtraSection1 = () => {
  return (
    <div className="mt-5">
        <div className="text-center">
        <h2 className="text-center text-white">CHEF’S RECOMMENDATION</h2>
        <small className="text-white">How To Choice Delicious Food</small>
        <hr className="text-white mt-2" />

        </div>
       
       
       <div className="row bg-dark rounded mb-3">
      
        <div className="col-12 col-lg-6 mt-3">
          
          <ol className="text-white p-5">
            <li className="mt-4">
              Look for fresh ingredients: Fresh ingredients like vegetables,
              fruits, meats, and seafood tend to have better flavor than those
              that have been sitting around for too long.
            </li>
            <li className="mt-3">
              Consider the cooking method: The way that a dish is prepared can
              have a big impact on its taste. For example, grilling, roasting,
              and sautéing can bring out different flavors in meats and
              vegetables.
            </li>
            <li className="mt-3">
              Read reviews or ask for recommendations: If you're dining out,
              reading reviews from other customers or asking your server for
              recommendations can give you a good idea of what dishes are most
              popular and well-liked.
            </li>
            
           
          </ol>
        </div>
  {/* right side */}
        <div className="col-12 col-lg-6 p-4">
            <img className="w-100 mt-5 rounded " src={chefChoice} alt="chef-Choice" />

        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;
