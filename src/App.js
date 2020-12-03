import React from 'react';
import Dinner from './dinner.js';  

function App() {
  return ( <div>
       <h1>hello world from ahmed</h1>

        <hr/>
       {/* <Dinner></Dinner> */}


           <Dinner dishName="Nihari" sweetdish="kheer"/>

        <hr/> 
      
           <Dinner dishName="biryani" sweetdish="jalebi"/>

        <hr/>

           <Dinner dishName="pulao" sweetdish="gajar ka halwa"/>
        </div>
  );

}

export default App;

var student = {
  name: 'ahmed',
  course: 'bootcamp'
}
