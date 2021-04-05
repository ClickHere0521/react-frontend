import React, { useState } from 'react';
import SettingContext from './SettingContext';
import {config} from '../../components/customizer/config.json';
const SettingProvider = (props) => {
    const [layoutState, setLayoutState] = useState("RTL");
    const [layoutColor, setLayoutColor] = useState("#ff4c3b");
    const layoutFun = (item) => {
        if (item === "RTL") {
            document.body.classList.remove("ltr");
            document.body.classList.add("rtl");
            setLayoutState("LTR")
          } else {
            document.body.classList.remove("rtl");
            document.body.classList.add("ltr");
            setLayoutState("RTL")
          }
    }

    const layoutColorFun = (item) => {
        localStorage.setItem("color",item.target.value)
        document.documentElement.style.setProperty('--theme-deafult', item.target.value);
        config.color=item.target.value
        setLayoutColor(item.target.value)
    }

    return(
        <SettingContext.Provider
            value={{
                ...props,
                state: layoutState,
                layoutFun:layoutFun,
                layoutColorFun:layoutColorFun
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingProvider;
