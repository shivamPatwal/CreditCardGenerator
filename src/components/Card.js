import React from "react";
import "./Card.css"

import  PropTypes from 'prop-types'

function Card({name,cardNumber,expiryMonth,expiryYear,cvv}) {

  let c = "";

  for(var i=1;i<=16;i++){
     
    if(i%4===0){
      c+=cardNumber.charAt(i-1);   
      c+=" ";

    }else {
      c+=cardNumber.charAt(i-1);
    }


  }


return (

<>

<div id="parents">

<div id="cardmain" className="cards1">

   <div id="dots">
   <span id="dot1"></span>
   <span id="dot2"></span>
   </div>
  <div id="details">
    <h1 id="h1">{c}</h1>
    <div id="data"> 
        <h3>{name}</h3>
        <h3>{expiryMonth}/{expiryYear}
        </h3>
    </div>
 
  </div>

  </div>

<div id="cardback" className="cards2">


<h4 id="h4">{cvv}</h4>





 
  </div>




</div>

</>


);

}

Card.prototype = {

    name: PropTypes.string,
    cardNumber: PropTypes.string,
    expiryMonth: PropTypes.string,
    expiryYear: PropTypes.string,
    cvv: PropTypes.string

    
};

Card.defalutProps = {
    name: 'Jane Appleseed',
    cardNumber: '0000 0000 0000 0000',
    expiryMonth: '00',
    expiryYear: '01',
    cvc: '000'
  };
export default Card ;