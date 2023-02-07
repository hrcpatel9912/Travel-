import React from 'react'
import product_card from "../data/product_data";

const MainContent = () => {
  console.log(product_card);
  const listItems = product_card.map((item) =>
  <div className="card" key={item.id}>
    <div className="card_img">
      <img src={item.thumb} alt />
    </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p classNmae="price">{item.price}<span>{item.currency}</span></p>
        <div className="btn">Add to Cart</div>
      </div>
  </div>
  
  );
  return(
    <div className="main_contect">
    <h3>Headphone</h3>
    {listItems}
    </div>
  )
}
export default MainContent;