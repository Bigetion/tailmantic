import { createContext, useContext } from 'react';

const ComponentDocsContext = createContext(null);

export const ComponentDocsProvider = ComponentDocsContext.Provider;

export function useComponentDocs() {
  return useContext(ComponentDocsContext);
}
