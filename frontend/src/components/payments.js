import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout";

function Index(){

    const [product,setProduct]=useState({
        name:"Donation",
        price:10
    })

    const makePayment = token=>{
        const body= {
            token,
            product
        }
        const headers={
            "Content-Type":"application/json"
        }
    
        return fetch(`http://localhost:5000/payment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(Response=>{
            console.log("RESPONS: ",Response)
            const {status} = Response;
            console.log("Status: ",status)   
        })
        .catch(error =>console.log(error))
    
    
    }

    const updateDonation = e=>{
        setProduct({price: e.target.value})
    }

    return(
        <div>
            <label htmlFor="username">Donate: </label>
            <input id="username" value={product.price} onChange={updateDonation} className='login-input'></input>
            <StripeCheckout stripeKey="pk_test_51Gx3lcGeAq3bZmDsdH9ET2Chavj84l5egHcUlwGn3pEi4FE5RMrMnvHdO4HNNwCHDVmTPVrBe3YpyZ9D1gMuK6xt00QhvauVrQ" token={makePayment} amount={product.price*100} name = 'Donate PLS'>
                <button>Donate Now</button>            
            </StripeCheckout></div>
    )
}

export default Index