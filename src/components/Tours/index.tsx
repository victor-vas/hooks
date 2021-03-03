import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { Wrapper } from './styled';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

export interface ITour {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<ITour[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: ITour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (tours.length === 0) {
    return (
      <Wrapper>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Tours tours={tours} removeTour={removeTour} />
    </Wrapper>
  );
}

export default App;
