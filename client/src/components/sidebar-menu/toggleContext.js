import React, { useContext, useState, useEffect } from "react";

// Creating the context 
const ToggleContext = React.createContext()
const ToggleUpdateContext = React.createContext()

// Create first instance of ToggleContext
export function useToggle() {
    return useContext(ToggleContext)
}

// Update the instance
export function useToggleUpdate() {
    return useContext(ToggleUpdateContext)
}


export function ToggleProvider({ children }) {
    // Use state
    const [toggleState, setToggleState] = useState(false)

    // Storing 
    useEffect(() => {
        setToggleState(JSON.parse(window.localStorage.getItem('toggleState')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('toggleState', toggleState);
    }, [toggleState]);

    const toggleSidebar = () => {
        setToggleState(!toggleState);
    };

    return (
        <ToggleContext.Provider value={toggleState}>
            <ToggleUpdateContext.Provider value={toggleSidebar}>
                {children}
            </ToggleUpdateContext.Provider>
        </ToggleContext.Provider>
    )
}