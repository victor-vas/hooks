import React, { useState, useContext } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

export interface IAppProvider {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const AppContext = React.createContext<IAppProvider | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
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
