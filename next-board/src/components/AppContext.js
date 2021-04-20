import { createContext, useState } from 'react';

export function AppWrapper({ children }) {
    const [notes, setNotes] = useState([]);
    return (
        <AppContext.Provider value={[notes, setNotes]}>
            {children}
        </AppContext.Provider>
    );
}

export const AppContext = createContext();
