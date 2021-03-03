import React from 'react';
import { ITour } from '.';
import Tour from './Tour';

interface ToursProps {
  tours: ITour[];
  removeTour: (id: string) => void;
}

const Tours = ({ tours, removeTour }: ToursProps) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
