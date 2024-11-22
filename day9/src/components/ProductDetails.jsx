import { useParams } from "react-router-dom"
import { products } from "../utils/products";
import Product from "./Product";

export default function ProductDetails() {
  const {id}=useParams();

  const product = products.find(product=>product.id==id);

  return (
    <div>
      <Product product={product} moreInfo={true} size={10}/>
    </div>
  )
}
