import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripePay=({price})=>{
       const priceForStripe=price*100;
       const publishableKey="pk_test_51IZBGrCFHAzE5D8xnzGdBYWyiGkRftoDhO98csf4vrtolTew2pt2HeBtaSi1YVERrgKS2Ji0DbXKvvgHHxxXFIyH00kkiixRNX";
       
       
       const onToken=(token)=>{
        console.log(token);
        alert("successful");
    };
    
       return(
           <StripeCheckout
           label="pay now"
           billingAddress
           shippingAddress
           amount={priceForStripe}
           name="CROWN PVT LTD"
           token={onToken}
           panelLabel="pay now"
           description={`Your total price is ${"$"+price}`}
           stripeKey={publishableKey}
           />
       );
          

    };
    export default StripePay;

