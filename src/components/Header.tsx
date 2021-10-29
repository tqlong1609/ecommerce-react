import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../state';
import { signOut } from '../state/actions';

export const Header: React.FC = () => {
    const refMenu = useRef<HTMLUListElement>(null)
    const productsCart = useSelector((state: State) => state.cartProducts.productsCart)
    const user = useSelector((state: State) => state.userLogin.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (refMenu && refMenu.current) {
            if (refMenu.current.style.maxHeight || refMenu.current.style.maxHeight === "") {
                refMenu.current.style.maxHeight = "0px"
            }
        }
    }, [])
    const onClickMenu = () => {
        if (refMenu.current?.style.maxHeight === "0px") {
            refMenu.current.style.maxHeight = "200px"
        } else {
            if (refMenu.current?.style.maxHeight || refMenu.current?.style.maxHeight === "") {
                refMenu.current.style.maxHeight = "0px"
            }
        }
    };
    const onHideMenu = () => {
        if (refMenu.current?.style.maxHeight || refMenu.current?.style.maxHeight === "") {
            refMenu.current.style.maxHeight = "0px"
        }
    }

    const onSignOut = () => {
        if (user) {
            dispatch(signOut())
        }
    }

    return (
        <div className="header">
            <div className="container">
                <div className="narbar">
                    <div className="logo">
                        <Link to="/" >
                            <img src="/images/logo.png" alt="logo" width="125px" />
                        </Link>
                    </div>
                    <nav>
                        <ul ref={refMenu}>
                            <li><Link to="/" onClick={onHideMenu}>Home</Link></li>
                            <li><Link to="/allproduct" onClick={onHideMenu}>Products</Link></li>
                        <li><Link to="/about" onClick={onHideMenu}>About</Link></li>
                            <li><Link to="/contact" onClick={onHideMenu}>Contact</Link></li>
                            <li>
                                {!user ? <Link to="/signin" onClick={onHideMenu}>Account</Link> : <div className="dropdown">
                                    <Link to="#"> {user.name} <i className="fa fa-caret-down"></i> </Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/userprofile" >Profile</Link>
                                        </li>
                                        <li>
                                            {/* Lỗi request liên tục nếu /order/history */}
                                            <Link to="/orderhistory" >Order History</Link>
                                        </li>
                                        <li>
                                            <Link to="#signout" onClick={onSignOut}>Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>}
                            </li>
                        </ul>
                    </nav>
                    <Link to={productsCart.length > 0 ? '/cart' : '#'}>
                        <div className="cart_badge">
                            <img
                                src="/images/cart.png"
                                alt="cart"
                                width="30px"
                                height="30px"
                            />
                            {productsCart.length > 0 && <span className="badge">{productsCart.length}</span>}
                        </div>
                    </Link>
                    <img
                        src="/images/menu.png"
                        alt="menu"
                        width="30px"
                        height="30px"
                        className="menu-icon"
                        onClick={onClickMenu}
                    />
                </div>
            </div>
        </div>
    );
}