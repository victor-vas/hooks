import styled from 'styled-components';

export const Wrapper = styled.main`
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .birthday-main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 90vw;
    margin: 5rem 0;
    max-width: 450px;
    background: #fff;
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  }

  .container h3 {
    font-weight: normal;
    text-transform: none;
    margin-bottom: 2rem;
  }

  .person {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.75rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .person img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .person h4 {
    margin-bottom: 0.35rem;
  }

  .person p {
    margin-bottom: 0;
  }

  .container button {
    color: #fff;
    display: block;
    width: 100%;
    border-color: transparent;
    background: #f28ab2;
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: 0.1rem;
    border-radius: 0.25rem;
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
  }
`;
