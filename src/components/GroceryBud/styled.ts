import styled from 'styled-components';

export const Wrapper = styled.main`
  /*
  ===============
  Variables
  ===============
  */

  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
  /*
  ===============
  Global Styles
  ===============
  */

  *,
  ::after,
  ::before {
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

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
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
    font-size: 1.25rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.75rem;
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

  .btn {
    text-transform: uppercase;
    background: transparent;
    color: var(--clr-black);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-black);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }

  .btn:hover {
    color: var(--clr-white);
    background: var(--clr-black);
  }

  /* section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 35rem;
    margin-top: 8rem;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  /*
  ===============
  Grocery List
  ===============
  */
  .section-center {
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    padding: 2rem;
  }

  .section-center:hover {
    box-shadow: var(--dark-shadow);
  }

  .alert {
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }

  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }

  .alert-success {
    color: #155724;
    background: #d4edda;
  }

  .grocery-form h3 {
    color: var(--clr-primary-1);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .form-control {
    display: flex;
    justify-content: center;
  }

  .grocery {
    padding: 0.25rem;
    padding-left: 1rem;
    background: var(--clr-grey-10);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: var(--clr-grey-5);
  }

  .grocery::placeholder {
    font-family: var(--ff-secondary);
    color: var(--clr-grey-5);
  }

  .submit-btn {
    background: var(--clr-primary-8);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    cursor: pointer;
    content: var(--clr-primary-5);
    transition: var(--transition);
    font-size: 0.85rem;
  }

  .submit-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }

  .grocery-container {
    margin-top: 2rem;
  }

  .grocery-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.25rem 1rem;
    border-radius: var(--radius);
    text-transform: capitalize;
  }

  .grocery-item:hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }

  .grocery-item:hover .title {
    color: var(--clr-grey-5);
  }

  .title {
    margin-bottom: 0;
    color: var(--clr-grey-1);
    letter-spacing: 2px;
    transition: var(--transition);
  }

  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: var(--transition);
  }

  .edit-btn {
    color: var(--clr-green-light);
  }

  .edit-btn:hover {
    color: var(--clr-green-dark);
  }

  .delete-btn {
    color: var(--clr-red-light);
  }

  .delete-btn:hover {
    color: var(--clr-red-dark);
  }

  .clear-btn {
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-light);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 1.25rem;
  }

  .clear-btn:hover {
    color: var(--clr-red-dark);
  }
`;
