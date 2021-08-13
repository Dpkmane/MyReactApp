import React from 'react';
import Counter from './counter';

class Product extends React.Component{

    constructor(props){
        super(props);
        this.state={likes:props.likes};
        this.handler=this.handler.bind(this);
    }

    handler(data){
        this.setState({likes:data});
    }

    render(){

     return(
            <div>
               <h3>Flower Detials</h3>
               <hr/>
               <p>Title:{this.props.title}</p>
               <img src={this.props.imageurl}width="100" height="100"></img>
               <p>Price:{this.props.price}</p>
               <button>Add to Cart</button>
            </div>

        )
     }
};
export default Product;