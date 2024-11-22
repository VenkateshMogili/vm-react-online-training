import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Home";

export default function Product({ product,moreInfo,size }) {
  const context = useContext(CartContext);
  const {handleAddToCart,handleRemoveFromCart}=context;
  return (
    <div className={`card m-2 col-${size?size:'3'}`}>
      <Link to={`/home/product/${product.id}`}>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-start">
          <span>{product.name}</span>
          <span>₹{product.price}</span>
        </h5>
        <p className="card-text">
          {product.description}
        </p>
        {moreInfo && <p>More Info</p>}
      </div>
      {product.quantity && <h4>Quantity: {product.quantity}</h4>}
      {product.quantity && <button className="btn btn-danger m-2" onClick={()=>handleRemoveFromCart(product.id)}>Remove From Cart</button>}

      <button className="btn btn-primary m-2" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
    </div>
  )
}
