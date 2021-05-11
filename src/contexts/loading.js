import React, { createContext, useState, useContext } from "react";

import Loading from "../components/Loading";

const LoadingContext = createContext({
  showLoading: () => {},
  hideLoading: () => {},
});

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  
  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
