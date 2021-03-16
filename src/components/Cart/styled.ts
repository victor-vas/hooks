import styled from 'styled-components';

export const Wrapper = styled.main`
  /*
  ===============
  Variables
  ===============
  */

  --clr-primary: #2680c0;
  --clr-primary-dark: hsl(205, 100%, 21%);
  --clr-primary-light: hsl(205, 84%, 74%);
  --clr-grey-1: #102a42;
  --clr-grey-5: #617d98;
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.25rem;
  --large-screen-width: 1170px;
  --small-screen-width: 90vw;
  --fixed-width: 50rem;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--clr-grey-10);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1rem;
    }

    body {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  /* more global css */

  .btn-cart {
    text-transform: uppercase;
    background: var(--clr-primary);
    color: var(--clr-white);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    transition: var(--transition);
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .btn-cart:hover {
    color: var(--clr-primary);
    background: var(--clr-primary-light);
  }

  /*
  ===============
  Navbar
  ===============
  */
  .loading {
    text-align: center;
    margin-top: 5rem;
  }

  nav {
    background: var(--clr-primary);
    padding: 1.25rem 2rem;
  }

  .nav-center {
    max-width: var(--fixed-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav h3 {
    margin-bottom: 0;
    color: var(--clr-white);
  }

  .nav-container {
    display: block;
    position: relative;
  }

  nav svg {
    width: 2rem;
    fill: var(--clr-white);
  }

  .amount-container {
    position: absolute;
    top: -0.85rem;
    right: -0.85rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--clr-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-amount {
    color: var(--clr-white);
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  /*
  ===============
  Cart
  ===============
  */
  .cart {
    min-height: calc(90vh - 120px);
    width: 60vw;
    margin: 0 auto;
    margin-top: 40px;
    padding: 2.5rem 0;
    max-width: var(--fixed-width);
  }

  .cart h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  .empty-cart {
    text-transform: lowercase;
    color: var(--clr-grey-5);
    margin-top: 1rem;
    text-align: center;
  }

  .cart footer {
    margin-top: 4rem;
    text-align: center;
  }

  .cart-total h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .clear-btn {
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--clr-red-dark);
    border: 1px solid var(--clr-red-dark);
    margin-top: 2.25rem;
    border-radius: var(--radius);
  }

  .clear-btn:hover {
    background: var(--clr-red-light);
    color: var(--clr-red-dark);
    border-color: var(--clr-red-light);
  }
  /*
  ===============
  Cart Item
  ===============
  */
  .cart-item {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
  }

  .cart-item img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  .cart-item h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .item-price {
    color: var(--clr-grey-5);
  }

  .remove-btn {
    color: var(--clr-primary);
    letter-spacing: var(--spacing);
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: var(--transition);
  }

  .remove-btn:hover {
    color: var(--clr-primary-light);
  }

  .amount-btn {
    width: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .amount-btn svg {
    fill: var(--clr-primary);
  }

  .amount-btn:hover svg {
    fill: var(--clr-primary-light);
  }

  .amount {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
  }

  hr {
    background: var(--clr-grey-5);
    border-color: transparent;
    border-width: 0.25px;
  }
`;
