import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import { Wrapper } from './styled';

function App() {
  const [questions] = useState(data);

  return (
    <Wrapper>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </Wrapper>
  );
}

export default App;
