import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IAppProvider, useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext() as IAppProvider;

  return (
    <>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn-modal">
        show modal
      </button>
    </>
  );
};

export default Home;
