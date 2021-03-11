import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { IAppProvider, useGlobalContext } from './context';

const Navbar = () => {
  const {
    openSidebar,
    openSubmenu,
    closeSubmenu,
  } = useGlobalContext() as IAppProvider;

  const displaySubmenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const page = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    if (page) openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!e.currentTarget.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
