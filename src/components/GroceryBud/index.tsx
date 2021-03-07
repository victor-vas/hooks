import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { Wrapper } from './styled';

export interface IItemList {
  id: string;
  title: string;
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return (list = JSON.parse(localStorage.getItem('list') as string));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState<IItemList[]>(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        }),
      );

      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id: string) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id) as IItemList;

    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <Wrapper>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  );
}

export default App;
