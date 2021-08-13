
import React from "react";
import Product from './product';
class Restlist extends React.Component{
    
    constructor(props){
        super(props)
        this.state={product:[]};

    }
    componentDidMount(){
        fetch('http://localhost:7575/api/flowers')
        .then(
           async response=>{
               const data = await response.json();
               if(!response.ok){
             const error=(data && data.message || response.statusText)
             return Promise.reject(error);
               }
               this.setState({product:data});
           })
        .catch(error=>{
            this.setState({errorMessage:error.toString()});
        })
    }
    render(){
      
        return(
            <div> {
                    this.state.product.map(item=>(
                       <Product title={item.name}
                                imageurl={item.imageurl}
                                price={item.price}
                               />
                    ))
                 }

            </div>
        )
    }
}
export default Restlist;