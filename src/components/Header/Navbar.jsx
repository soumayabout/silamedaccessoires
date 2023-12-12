import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';
import log from '../assets/login.png';
import { ShopContext } from '../Shopcontext';

const Navbar = () => {
  const { TotalCart } = useContext(ShopContext);
  const [menu, setMenu] = useState("Accueil");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(TotalCart());
  }, [TotalCart]);
  const handleMenuChange = (selectedMenu) => {
    setMenu(selectedMenu);
    closeMenu(); 
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <p><span>Silamed</span>Accessories</p>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => { handleMenuChange("Home"); }}>
          <Link to='/' style={{ textDecoration: 'none' }}>Accueil</Link>
          {menu === "Home" ? <hr /> : null}
        </li>
        <li className="shop-menu" onClick={toggleMenu}>
        Boutique
          {menu === "Shop" ? <hr /> : null}
          <div className={`submenu ${isMenuOpen ? 'open' : ''}`}>
            <div onClick={() => { handleMenuChange("men"); }}>
              <Link to='/shop/mens' style={{ textDecoration: 'none' }}>Hommes</Link>
              {menu === "men" ? <hr /> : null}
            </div>
            <div onClick={() => { handleMenuChange("women"); }}>
              <Link to='/shop/womens' style={{ textDecoration: 'none' }}>Femmes</Link>
              {menu === "women" ? <hr /> : null}
            </div>
          </div>
        </li>
        <li onClick={() => { handleMenuChange("contacts"); }}>
          <Link to='/Newletter' style={{ textDecoration: 'none' }}>Contact</Link>
          {menu === "contacts" ? <hr /> : null}
        </li>
      </ul>
      <div className='login-cart' >
        <Link to='/login' >
          < img src={log} />
        </Link>
        <Link to='/cart' >
          <img src={cart} />
        </Link>
        <div className='count'>{cartCount}</div>
      </div>
      <div className='menu-toggle' onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
