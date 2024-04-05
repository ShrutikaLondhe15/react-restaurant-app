// import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{useContext} from 'react';
import CartContext from '../../store/CartContext';


const Cart=props=>{

const cartCtx=useContext(CartContext);

  const cartItems = (
      <ul className={classes['cart-items']}>
        
        {cartCtx.items.map((item) => (
          <li>Item Name:{item.name} Quantity:{item.quantity}</li>
        ))}
      </ul>
    );
 }
 
 export default Cart;
