import { createContext, useContext } from 'react';

interface PageContextProps {
 isFinalPage: boolean;
}
// Create the context with a default value
export const PageContext = createContext<PageContextProps>({
  isFinalPage: false,
});

// Custom hook for easy access to the context
export const usePageContext = () => useContext(PageContext);
