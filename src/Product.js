import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import "./style/Product.css";
import { useStateValue } from "./Provider";


function Product() {
  //
  const [ basket, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
   
  console.log(basket);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  const addToDetail = (product) => {dispatch({type: "ADD_TO_DETAIL",payload: product,});};
  
  return (
    <>
      <h1>
      </h1>
      <Link to="/productdetail" className="productdetail__link">
        <Wrapper>
          {products.map((product) => (
            <ProductDiv>
              <img src={product.image} alt="" onClick={() => addToDetail(product)}/>
             <InfoDiv><h4>{product.title}</h4>
            <p> <small>$</small><strong>{product.price}</strong></p>
              <button className>Learn More </button>
            </InfoDiv>
            </ProductDiv>
          ))}
        </Wrapper>
      </Link>
    </>
  );
}

const Wrapper=styled.div`
display: flex;
flex-wrap: wrap;
z-index: 1;
margin-left: 300px;
margin-right: 300px;

`;
const ProductDiv = styled.div`

margin: 10px;
padding: 20px;
width: 300px;
max-height: 400px;
min-width: 100px;
background-color: white;
z-index: 1;
box-shadow: 0 6px 18px -9px rgba(0, 0, 0, 0.75);
transition: transform 0.1s ease-in;
 > img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}
`;

const InfoDiv=styled.div`
height: 100px;
margin-bottom: 15px
>p{
  margin-top: 5px;
}
.product__info {
  height: 100px;
  margin-bottom: 15px;
}
`;

export default Product;
