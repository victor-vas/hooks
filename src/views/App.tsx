import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../components/Content';
import Menu from '../components/Menu';
import { data, DataContext, IData } from '../data/DataContext';
import Store from '../data/Store';
import './App.css';

export type ContextType = {
  state: IData;
  setState: React.Dispatch<React.SetStateAction<IData>>;
};

const App = () => {
  const [state, setState] = useState(data);
  const newState: ContextType = { state, setState };

  return (
    <Store>
      <DataContext.Provider value={newState}>
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  );
};

export default App;
