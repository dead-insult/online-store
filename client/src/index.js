import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import GoodStore from './store/GoodStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    good: new GoodStore(),
  }}>
    <App />
  </Context.Provider>
);