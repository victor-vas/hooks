import styled from 'styled-components';

export const Wrapper = styled.main`
  & {
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
  }

  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  /*
  ===============
  Reviews
  ===============
  */
  & {
    display: grid;
    place-items: center;
  }

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }

  .container {
    width: 80vw;
    max-width: var(--fixed-width);
  }
  .review {
    background: var(--clr-white);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
  }
  .review:hover {
    box-shadow: var(--dark-shadow);
  }

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }

  .img-container::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }

  .author {
    margin-bottom: 0.25rem;
  }

  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }

  .info {
    margin-bottom: 0.75rem;
  }

  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-primary-5);
  }

  .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
  }

  .random-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;
