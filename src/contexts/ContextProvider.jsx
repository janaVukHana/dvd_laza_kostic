import { createContext, useContext, useState, useEffect } from "react";

// createContext function accept DEFAULT VALUE. Default value is important for autocomplete purpose.
const StateContext = createContext({
    active: null,
    setActive: () => {},
    showMenu: null,
    setShowMenu: () => {},
})

// Now create context provider
export const ContextProvider = ({children}) => {

    const [active, setActive] = useState('home')
    const [showMenu, setShowMenu] = useState(() => {
        if(window.innerWidth > 768) {
            return true
        }
        return false
    })
    
    return (
        <StateContext.Provider value={{
            active,
            setActive,
            showMenu,
            setShowMenu
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)