import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    const refMenu = useRef<HTMLUListElement>(null)
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
                            <li><Link to="#" onClick={onHideMenu}>About</Link></li>
                            <li><Link to="#" onClick={onHideMenu}>Contact</Link></li>
                            <li><Link to="/signin" onClick={onHideMenu}>Account</Link></li>
                        </ul>
                    </nav>
                    <Link to="/cart">
                        <img
                            src="/images/cart.png"
                            alt="cart"
                            width="30px"
                            height="30px"
                        />
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