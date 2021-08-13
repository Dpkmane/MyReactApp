import React from 'react';

class Login extends React.Component{
 

    constructor(props){
      super(props)
      this.state={
         username:"Dpkmane",
         password:'1545'
      }
    }

  render(){
    return (
      <div >
      
          <hr/>
          <h2 >Login to Access our service </h2>
          <hr/>
         
           <div>
               <label>User Name :</label>
              <input type="text" value={this.state.username}
                     onChange={(event)=>{
                       this.setState({username:event.target.value})

                     }}
                     className='form-control'
                     ></input>
                </div>   
                <div>  
                     <label>Password :</label>
                     <input type="password" value={this.state.password} 
                      onChange={(event)=>{
                        this.setState({password:event.target.value})
 
                      }}
                      className='form-control'
                     
                     ></input>
            
            </div>   
            <div>
                  <button onClick={()=>{
                       if(this.state.username == 'Dpkmane' && this.state.password == 1545)
                       {
                         console.log("Valid User");
                       
                       }
                       else{
                         console.log("Invalid User");
                       }
                     }
                     }>Login</button>
            </div>
         
      
      </div>
    );
  }
}
  
  export default Login;