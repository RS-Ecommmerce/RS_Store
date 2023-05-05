import React from 'react'
import styled from 'styled-components';
import { useState} from 'react';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { Button } from "../styles/Button";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({product}) => {

  const{addToCart} = useCartContext();

    const colors =  [
        "#ff0000",
        "#000000",
        "#CDD0D0"
        ];
     
    const [amount, setAmount] = useState(1);    

    const setDecrease = ()=> {
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    };
    
    const setIncrease = ()=> {
        amount < 10 ? setAmount(amount+1) : setAmount(10);
    };

    const [color, setColor] = useState(colors[0]);    
    const{productId} = product;

  return (
   <Wrapper>
    <div className='colors'>
        <p> 
            Colors:
            {colors.map((curColor, index)=>{
                return <button key={index}
                style={{backgroundColor:curColor}}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={()=>setColor(curColor)}>
                {color === curColor ? <FaCheck  className="checkStyle" />: null}
                </button>
            })}
        </p>
    </div>

    {/* Add to Cart */}

    <CartAmountToggle
        amount = {amount}
        setDecrease = {setDecrease}
        setIncrease = {setIncrease}
    />    

    <NavLink to='/cart' onClick={() => addToCart(productId, amount, product)}>
        <Button className='btn-cart '>Add to Cart</Button>
    </NavLink>
   </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .btn-cart {
    margin: 2rem 0;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(255 165 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgb(255 165 0);
    
}
`;

export default AddToCart