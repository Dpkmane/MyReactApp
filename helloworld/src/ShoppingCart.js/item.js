import React from 'react';


class Item extends React.Component{

    constructor(props){
        super(props);
        this.state={quantity:props.quantity};
      
    }


    render(){

     return(
            <div>
               <h3>Item Detials</h3>
               <hr/>
               <p>Title:{this.props.title}</p>
               <img src={this.props.imageurl}width="100" height="100"></img>
               <p>Price:{this.props.price}</p> 
              <p>Quantity:{this.props.quantity}</p>
              <p>Amount:{this.props.quantity * this.props.price} Rs.</p>
               <button>Remove</button>
            </div>

        )
     }
};
export default Item;