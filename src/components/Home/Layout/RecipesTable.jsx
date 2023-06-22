import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesTable = ({ item }) => {
    const { name,ingredients, cooking_method, rating } = item;
    const { name2,ingredients2, cooking_method2, rating2 } = item;
    const { name3,ingredients3, cooking_method3, rating3 } = item;
    
    const [favBtn,setFavBtn] = useState(false)
    const [favBtn2,setFavBtn2] = useState(false)
    const [favBtn3,setFavBtn3] = useState(false)

    const recipeFav = ()=>{
       
        toast.warning('the recipe is your favorite');
        setFavBtn(true)
   
    }
    const recipeFav2 = ()=>{
       
        toast.warning('the recipe is your favorite');
       
        setFavBtn2(true)
      
    }
    const recipeFav3 = ()=>{
       
        toast.warning('the recipe is your favorite');
      
        setFavBtn3(true)
    }



    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{ingredients}</td>
            <td>{cooking_method}</td>
            <td>{rating}</td>
            
            <td><Button variant="warning" onClick={recipeFav} disabled={favBtn}>&#x2661;</Button></td>
        </tr>
       
        <tr>
            <td>{name2}</td>
            <td>{ingredients2}</td>
            <td>{cooking_method2}</td>
            <td>{rating2}</td>
            
            <td><Button variant="warning" onClick={recipeFav2} disabled={favBtn2}>&#x2661;</Button></td>
        </tr>
       
        <tr>
            <td>{name3}</td>
            <td>{ingredients3}</td>
            <td>{cooking_method3}</td>
            <td>{rating3}</td>
            
            <td><Button variant="warning" onClick={recipeFav3} disabled={favBtn3}>&#x2661;</Button></td>
        </tr>

        </>
    );
};

export default RecipesTable;
