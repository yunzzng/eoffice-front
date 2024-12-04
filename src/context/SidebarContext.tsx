import {
  FC,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  PropsWithChildren,
} from 'react';

interface SidebarContextProps {
  selectedMenu: string;
  setSelectedMenu: Dispatch<SetStateAction<string>>;
}

export const SidebarContext = createContext<SidebarContextProps>({
  selectedMenu: '',
  setSelectedMenu: () => {},
});

interface SidebarProps extends PropsWithChildren {}
export const SidebarProvider: FC<SidebarProps> = (props) => {
  const { children } = props;
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  return (
    <SidebarContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};
