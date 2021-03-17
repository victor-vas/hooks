import React from 'react';
import { useGlobalContext, IValue } from '../context';

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext() as IValue;
  const searchValue = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (searchValue.current) {
      searchValue.current.focus();
    }
  }, []);

  function searchCocktail() {
    if (searchValue.current) {
      setSearchTerm(searchValue.current.value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
