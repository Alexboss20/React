import React, {useState, useContext} from 'react';
import Menu from '@components/Menu.jsx';
import MyOrder from '../containers/MyOrder.jsx';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext.js';
import '@styles/Header.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo}  alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Display</a>
                    </li>
                    <li>
                        <a href="/">PC &amp; Laptop</a>
                    </li>
                    <li>
                        <a href="/">Desks &amp; Chairs</a>
                    </li>
                    <li>
                        <a href="/">Build it</a>
                    </li>
                    <li>
                        <a href="/">Accessories</a>
                    </li>
                    <li>
                        <a href="/">Merchandise</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                    blackholetecn010gy@gmail.com
                    </li>
                    <li
                    className="navbar-shopping-cart"
                    onClick= {() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder/>}
        </nav>
    );
}

export default Header;