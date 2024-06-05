
import React, { useState } from 'react';
import './Form.css'



function Form(props) {

  const [name,setName]= useState("")
  const [cardNumber, setCardno] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [error, setError] = useState(false)

  const[issubmited, setIsSubmited] = useState(false);

  const isBtw = (month) => {

     if(month<13){
      return false;

     }


      return true;
     

  }


  const submit = (e)=> {
    
    e.preventDefault();

    if(   !(name.length <=0||  cardNumber.length<16 || expiryMonth.length!==2 || expiryYear.length!==2 || cvv.length!==3 || 
            expiryYear<24 || isBtw(expiryMonth) ) ){
             
              let data = [name, cardNumber,expiryMonth,expiryYear,cvv]
             
              props.onSubmit(data)
              setIsSubmited(true);
             setCardno("")
             setName("")
             setExpiryMonth("")
             setExpiryYear("")
             setCvv("")


            }else {
             
              setError(true)
              setIsSubmited(false);
              
  } 
}

  const check = (e)=>{

    setError(false)
    setIsSubmited(false)
   
  
  }
  

if(issubmited){
  return (

    <>
    
    <div id="finish">
    <h1 id="h11">Thank You!</h1>
    <h2 id="h22">we've added your card details</h2>
    <button  onClick={check}>Continue</button>

     </div>
    
    </>
    )

}


  
  return (
     
    <> 
          
       
       <form>   

        <h1>CARDHOLDER NAME</h1>
        <input type="text" placeholder="e.g Jane Applesed" onBlur={e=>setName(e.target.value)}  ></input>
        <br/>
        {error && name.length<=0 ? 
          <label>cardholder name is required</label> : "" }
        <h1>CARD NUMBER</h1>
        <input type="number" placeholder="e.g 12345678" onBlur={e=>setCardno(e.target.value)}></input>
        <br/>
        {error && cardNumber.length!==16 ?
        <label>card number must be 16 digits</label>: ""}
 
    <div id="col">
             
        <div>
           <h1>EXP.DATE</h1>
           <input type="number" placeholder="MM"  id="exbox1" onBlur={e=>setExpiryMonth(e.target.value)}  ></input>
           <input type="number" placeholder="YY" id="exbox1"  onBlur={e=>setExpiryYear(e.target.value)} ></input>
           <br/>
           {error && (  expiryMonth.length!==2 || expiryYear.length!==2   ) ?
            <label>Invalid Date</label> : ""}
        </div>
        
       

        <div>     
      <h1>CVV</h1>
      <input type="number" placeholder="e.g 123" id="exbox2"  onBlur={e=>setCvv(e.target.value)} ></input>
      <br/>
      { error && cvv.length !==3 ?
      <label>cvv must be 3 digit number</label>: ""}
      </div>
    </div>
    <button onClick={submit}  >CONFIRM</button>
      
        </form>



          
    </>
        
      );
}


export default Form;
