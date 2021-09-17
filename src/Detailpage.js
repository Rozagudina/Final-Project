import React from "react";
import "./style/Detailpage.css";
import { useStateValue } from "./Provider";

function Detailpage() {
  const [{ basket, detail, quantity }, dispatch] = useStateValue();


  const addToBasket = (product) => {
    // dispatch the item into the data layer
    dispatch({type: "ADD_TO_BASKET",payload: product,});};
  return (
    <div className="details ui grid container  ">
      {detail.map((product) => (
        <div className= "ui placeholder segment ">
        <div className="ui two column stackable center aligned grid">
        <div className="middle aligned row">
        <div className="column lp">
          <img className="details__image" src={product.image} alt=""/>
          </div>
          <div className="column rp">
            <h3>{product.title}</h3>
            <p className="column rp">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <h3>{product.category}</h3>
            <p className="">{product.description}</p>
            <div className="ui vertical animated button" tabIndex="0">
            <button onClick={() => addToBasket(product)}>Add to Basket</button>
            </div>
          
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detailpage;
