
import React from 'react';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={company:"Amdocs",year:2020}

    }
    changeComp(){
        this.setState({company:'TIAA'});
    }
    changeYear(){
        this.setState({year:2021});
    }
    render(){
        return(
            <div>
                <h2>Welcome to Transflower</h2>
                <br/>
                <p>{this.state.company}</p>
                <br/>
                <p>{this.state.year}</p>
                <br/>
                <a onClick={this.changeComp.bind(this)}>changeCompany </a>
                <br/>
                <a onClick={this.changeYear.bind(this)}>changeYear </a>
            </div>
        )
    }
}
export default Dashboard;