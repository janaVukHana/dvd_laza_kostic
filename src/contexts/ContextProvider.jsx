import { createContext, useContext, useState, useEffect } from "react";

// createContext function accept DEFAULT VALUE. Default value is important for autocomplete purpose.
const StateContext = createContext({
    active: null,
    setActive: () => {},
    // loading: null,
    // setLoading: () => {}
})

// Now create context provider
export const ContextProvider = ({children}) => {

    const [active, setActive] = useState('home')
    
    // const [loading, setLoading] = useState(false)

    return (
        <StateContext.Provider value={{
            active,
            setActive,
            // loading,
            // setLoading
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)