import React from "react";
import "./style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Provider";
import { useHistory } from "react-router";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div><p>Subtotal ({basket.length} items): <strong>{value}</strong></p></div>)}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}/>
      <button onClick={(e) => history.push("/checkoutpage")}>
         Checkout
      </button>
    </div>
  );
}

export default Subtotal;
