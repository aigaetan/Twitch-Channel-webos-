import { createContext, useContext, useState } from 'react';

const TwitchContext = createContext();

export const TwitchProvider = ({ children }) => {
  const [channel, setChannel] = useState('');

  const value = {
    channel,
    setChannel
  };

  return (
    <TwitchContext.Provider value={value}>
      {children}
    </TwitchContext.Provider>
  );
};

export const useTwitchContext = () => {
  const context = useContext(TwitchContext);
  if (!context) {
    throw new Error('useTwitchContext must be used within a TwitchProvider');
  }
  return context;
};