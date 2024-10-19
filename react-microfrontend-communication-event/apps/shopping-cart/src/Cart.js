import React, { useEffect, useState } from "react";
import { theme } from '@sumangcodes/design-system';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const CartWrapper = styled.div`
  border: ${(props) => props.theme.microfrontendBorder};
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.background};
`;

const RemoveButton = styled.button`
  margin-left: ${(props) => props.theme.spacing(1)};
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.dangerHover};
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleAddToCart = (event) => {
      const product = event.detail;
      setCartItems((prevItems) => {
        const exists = prevItems.some((item) => item.id === product.id);
        if (exists) return prevItems;
        return [...prevItems, product];
      });
    };

    window.addEventListener('add-to-cart', handleAddToCart);

    return () => {
      window.removeEventListener('add-to-cart', handleAddToCart);
    };
  }, []);

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <ThemeProvider theme={theme}>
      <CartWrapper>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price.toLocaleString()}
                  <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </RemoveButton>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{cartTotal.toLocaleString()}</h3>
          </>
        )}
      </CartWrapper>
    </ThemeProvider>
  );
};

export default Cart;