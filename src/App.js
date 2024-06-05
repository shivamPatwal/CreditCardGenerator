import React, { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Card from './components/Card'
import Finish from './components/Finish'


function App() {

  const [value, setValue] = useState(['Jane Applesded', '0000 0000 0000 0000', '00','00','000'])
  const [prompt, setPrompt] = useState(false);
  
   function handle(data) {
    setValue(data);
   setPrompt(true); 
  }


  return (
     
    <>
         <div id="s"></div>
       
         <div >
         <Form onSubmit={ handle }    />
            <Card   name={value[0]} cardNumber={value[1]} expiryMonth={value[2]} expiryYear={value[3]} cvv={value[4]}  />
            
         
         </div>
    </>
        
      );
}

export default App;
