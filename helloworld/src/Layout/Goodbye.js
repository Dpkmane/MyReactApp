import React from "react";

class GoodBye extends React.Component{

    buttonClick(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <p>Thank you for visiting</p>
                <button onClick={()=>this.buttonClick()}>Hello</button>
            </div>
        )
    }
}
export default GoodBye;