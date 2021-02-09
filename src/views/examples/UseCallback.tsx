import React, { useCallback, useState } from 'react';
import PageTitle from '../../components/PageTitle';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    (delta: number) => {
      setCount((current) => current + delta);
    },
    [setCount],
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

interface UseCallbackButtons {
  inc: (delta: number) => void;
}

// eslint-disable-next-line react/display-name
const UseCallbackButtons = React.memo(({ inc }: UseCallbackButtons) => {
  console.log('render...');
  return (
    <div>
      <button className="btn" onClick={() => inc(6)}>
        +6
      </button>
      <button className="btn" onClick={() => inc(12)}>
        +12
      </button>
      <button className="btn" onClick={() => inc(18)}>
        +18
      </button>
    </div>
  );
});

export default UseCallback;
