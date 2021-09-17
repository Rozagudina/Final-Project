import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style/CheckoutPage.css";
import { useStateValue } from "./Provider";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";



function CheckoutPage() {
  const [{ basket}, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded] = useState(false);
  const [processing] = useState("");


  const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
  
  const handleChange = (event) => {
   setDisabled(event.empty);
   setError(event.error ? event.error.message : "");
  };
  const goToHome = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/");
  };

  return (
		<div className="Payment ">
			<div className="ui placeholder segment">
				<h1>
					Checkout (<Link to="/cart">{basket?.length} items</Link>)
				</h1>
				<div className="section">
					<div className="title">
						<h3>Name : Guest</h3>
					</div>
					<div className="address"></div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>304 warren st </p>
						<p>Boton,Ma</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Billing Address</h3>
					</div>
					<div className="payment__address">
						<p>304 warren st </p>
						<p>Boton,Ma</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="items">
						{basket.map((item) => (
							<div className="checkoutProduct">
								<img
									className="checkoutProduct__image1"
									src={item.image}
									alt=""
								/>
								<div className="checkoutProduct__info">
									<p className="checkoutProduct__title">{item.title}</p>
									<p className="checkoutProduct__price">
										<small>$</small>
										<strong>{item.price}</strong>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="details">
						<form>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>

								<button
									onClick={goToHome}
									disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>{" "}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutPage;
