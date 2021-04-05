import React, { createContext , useState } from 'react';

export const Context = createContext({
    selectMenu: Function
  }
);


export const Provider = props => {

    const [selectMenu] = useState({ menuOpen: false });
  
    const menuContext = {
        selectMenu
    };
  
    return <Context.Provider value={menuContext}> {props.children}</Context.Provider>;
  };

export const { Consumer } = Context;

export {
  Context as MenuContext,
  Provider as MenuContextProvider,
} from "./MenuContext";
