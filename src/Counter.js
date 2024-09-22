import { useState } from "react"
import one from "./images/one.jpeg"

function Counter(){

    const[items,setitems]=useState(0)

    function addtocart(){
        setitems(items+1)
    }

    function removeitem(){
        setitems(items-1)
    }

    if(items<0){
        alert('Invalid')
        setitems(0)
    }

    return(
        <div class="container">
        <h1> Grab this Watch Now!</h1>
        <br></br>
        <img src ={one} alt="Product" class="product-img"></img>
        <br></br>
        <button class="btn add-btn" onClick={addtocart}>Add to Cart</button>
        <button class="btn remove-btn" onClick={removeitem}>Remove Item</button>
        <p class="cart-total">Total Items in the cart: <span id="totalItems">{items}</span></p>
    </div>

    )

}
export default Counter