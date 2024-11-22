import { useContext } from "react";
import { CartContext } from "./Home";
import Product from "./Product";

export default function Checkout() {
  const {cart} = useContext(CartContext);
  return (
      <div className="mt-5">
        <div>
        {cart.length>0 &&
        <a href="https://pmny.in/PAYUMN/eJ9A79RMErC3" target="_blank" className="btn btn-primary">Make Payment</a>
        }
        </div>

      <div className="d-flex justify-content-center flex-wrap mt-5">
      {cart.length>0 && cart.map((product,index)=>(
        <Product product={product} key={index} size={4}/>
      ))}
      </div>
      {cart.length===0 && <h1>Your Cart Is Empty!</h1>}
    </div>
  )
}
