import React from 'react';

import './style.css';

interface People {
  id: number;
  name: string;
  age: number;
  image: string;
}

interface ListProps {
  peoples: People[];
}

const List = ({ peoples }: ListProps) => {
  return (
    <>
      {peoples.map((people) => {
        const { id, name, age, image } = people;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
