import { createContext, useState } from 'react';

interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  setIsOpen: () => { },
});

export const SidebarProvider = ({ children }: { children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
