import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./style/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./Provider";
import styled from 'styled-components';

function Header() {
  const [{ basket}] = useStateValue();

  return (
    <Wrapper>
    <div className="nav_bar">
       <div className="home__link">
      <Link to="/" className="link"><h1 className="store">Roza STORE</h1></Link>
        </div>
        
      <div className="header__nav">
        <Link to="/cart" className="link">
            <div className="Basket ">
              
            <ShoppingBasketIcon />
            <span className="basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper =styled.div`
 .home__link{
  padding-left:130px

 }
.store{
color:black;
text-decoration: none;
align-items: center;
}
.nav_bar {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: gray;
  position: sticky;
  top: 0;
>link {
  text-decoration: none;
  color:white;
}

    

}

.search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
   padding-left:400px;
}
.Input {
  height: 11px;
  padding: 10px;
  width:500px;
  border:none;

}

.header__nav {
  display: flex;
  justify-content: space-evenly;
}

.Basket {
  display: flex;
  align-items: center;
  margin-right: 100px;
  color: black;
  padding-left:900px;
}
.header__basketCount {
  margin-left: 10px;
  margin-right: 10px;
}
.link {
  text-decoration: none;
}




`;
export default Header;
