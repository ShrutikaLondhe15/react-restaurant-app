import React, { Fragment } from "react";
import classes from './Header.module.css'

import mealsimg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>MyRestro</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt="A Table full of Delicious Food!!"/>
        </div>
    </Fragment>
}

export default Header;
