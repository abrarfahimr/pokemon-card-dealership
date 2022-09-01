import "./Header.scss";
import { Link } from 'react-router-dom';

function Header() {
 
  return (
    <>
      <div className="header">
        <div className="header__top">
        <Link to="./"> <h2 className="header__title"> Poke Deal</h2></Link>
        <Link to="/cart">
        <img className="header__cart"src={require("../../assets/images/cart.png")} alt={"cart"}/> </Link>
        </div>
        <div className="header__divider"></div>
      </div>
    </>
  );
}

export default Header;