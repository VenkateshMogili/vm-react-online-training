import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Home";

export default function Product({ product,moreInfo,size }) {
  const context = useContext(CartContext);
  const {handleAddToCart}=context;
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
      <button className="btn btn-primary" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
    </div>
  )
}
