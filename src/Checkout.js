import React from "react";
import "./style/Checkout.css";
import { useStateValue } from "./Provider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkout">
      <div className="left">
        
        
        <div>
          {basket?.map((item) => (

            <div className="checkoutProduct">
              <img className="image1" src={item.image} alt=""/>

              <div className="info">
                <p className="title">{item.title}</p>
                <p className="price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>
                <button onClick={() => removeFromBasket(item.id)} className="buton">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
