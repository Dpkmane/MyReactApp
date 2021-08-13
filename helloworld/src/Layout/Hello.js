import React from "react";
import { useHistory } from "react-router-dom";

 const Hello=()=> {
   const history=useHistory();

    const handleClick =()=>{

    console.log('GoodBye buttom Click');
    history.push('/goodbye');
   }
        return(

            <div>
                <p>Welocme to Transflower Store</p>
                <button onClick={handleClick}>GoodBye</button>
            </div>

        )
    
};

export default Hello;
