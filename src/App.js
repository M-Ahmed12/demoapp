import React from 'react'; 
import Dinner from './dinner';


function App() {
  return ( <div>

       {/* <Dinner> </Dinner> */}
      <Dinner dishname="karahi" sweetdish="kheer"/>   
     
      <hr/>
       
      <Dinner dishname="biryani" sweetdish="halwa"/>
       
      <hr/>

      <Dinner dishname="Pulao" sweetdish="gajar ka halwa"/>      
 
      <hr/>

        </div>
  );

}

export default App;


