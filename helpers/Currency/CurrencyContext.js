import React, { createContext, useState } from "react";

  
export const Context = createContext({});

export const Provider = props => {

  const [selectedCurr, selectedCurrency] = useState({ currency: 'USD',symbol: '$', value:1});

  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };

  const {value} = props

  return (
      <Context.Provider value={{
          state:selectedCurr,
          currencyContext:currencyContext
        }}>
        {props.children}
      </Context.Provider>
    );
  
};

export const { Consumer } = Context;

export {
  Context as CurrencyContext,
  Provider as CurrencyContextProvider,
} from "./CurrencyContext";
