import React from "react";
import Product from "./product";
import data from '../data/flowers.json';
class List extends React.Component{
     render(){
         const flowers=data;
         return(
             <div>{
                    flowers.map(item=>(
                       <Product title={item.name}
                                imageurl={item.imageurl}
                                price={item.price}
                                color={item.color}
                                likes={item.likes}/>
                    ))
                 }
                
             </div>
         )
     }
};
export default List;