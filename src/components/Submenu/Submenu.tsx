import React, { useState, useRef, useEffect } from 'react';
import { IAppProvider, useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext() as IAppProvider;
  const container = useRef<HTMLAnchorElement>(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current as HTMLAnchorElement;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [page, location, links]);

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
      style={{ zIndex: 100 }}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
