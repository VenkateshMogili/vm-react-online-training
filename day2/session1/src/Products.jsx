function Products(){
  const products=['React','Angular','Nodejs'];
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {products.map((product,index)=>(
        <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;