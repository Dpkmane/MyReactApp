import React from 'react';

class Register extends React.Component{

       constructor(props){
              super(props)
              this.state={
                     firstname:'',
                     lastname:'',
                     email:''
              }
       }

  render(){
    return (
      <div className="Login">
      
          <hr/>
          <h2 > register if you are new here </h2>
          <hr/>
       
          <table>
              <tr>
                     <td>First Name :</td>
                     <td><input type="text"
                     value={this.state.firstname}
                     onChange={(event)=>{
                            this.setState({firstname:event.target.value})
                     }}></input></td>
                     
              </tr>
              <tr>
                     <td>Last Name :</td>
                     <td><input type="text"
                     value={this.state.lastname}
                     onChange={(event)=>{
                            this.setState({lastname:event.target.value})
                     }}></input></td>
              </tr>
              <tr>
                     <td>Email:</td>
                     <td><input type="email"
                      value={this.state.email}
                      onChange={(event)=>{
                             this.setState({email:event.target.value})
                      }}></input></td>
              </tr>
              <tr>
                     <td></td>
                     <td><button type="submit" onClick={()=>{
                            console.log(this.state)
                     }}>Register</button></td>
              </tr>
          </table>
         
      
      </div>
    );
  }
}


  
  export default Register;