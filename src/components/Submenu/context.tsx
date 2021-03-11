/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from 'react';
import sublinks from './data';

interface AppProviderProps {
  children: React.ReactNode;
}

type Link = {
  label: string;
  icon: JSX.Element;
  url: string;
};

type Page = {
  page: string;
  links: Link[];
};

export interface IAppProvider {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  page: Page;
  location: any;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: (text: string, coordinates: any) => void;
  closeSubmenu: () => void;
}

const AppContext = React.createContext<IAppProvider | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<Page>({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text: string, coordinates: any) => {
    const page = sublinks.find((link) => link.page === text) as Page;
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
