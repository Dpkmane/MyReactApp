import React from "react";

import data from '../data/cart.json';
import Item from "./item";
class Cart extends React.Component{
     render(){
         const cartitem=data;
         return(
             <div>{
                cartitem.map(item=>(
                       <Item   title={item.name}
                                imageurl={item.imageurl}
                                price={item.price}
                                quantity={item.quantity}
                                />
                    ))
                 }
                
             </div>
         )
     }
};
export default  Cart;