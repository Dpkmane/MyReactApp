
import React from 'react';

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={count:props.count}
    }

    render()
    {
        return(
            <div>
                <button onClick={()=>{
                    console.log("Unlike")
                    this.setState({count:this.state.count-1})
                    this.props.handler(this.state.count-1);
                }}>-</button>

                <input value={this.state.count}type="text"/>

                <button onClick={()=>{
                    console.log("like")
                    this.setState({count:this.state.count+1})
                    this.props.handler(this.state.count+1);
                }}>+</button>

            </div>
        )
    }
 }
 export default Counter;