import React from "react";
import "./style/CheckoutProduct.css";
import { useStateValue } from "./Provider";

function CheckoutProducts({ id, image, title, price }) {
  const [dispatch] = useStateValue();
  const removeFromBasket = (id) => {
    // console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  }


  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={() => removeFromBasket(id)}>Delet</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
