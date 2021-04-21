import { createContext, useState } from 'react';

export function AppWrapper({ children }) {
    const [notes, setNotes] = useState([
        { id: '1', title: 1, content: 1 },
        { id: '2', title: 2, content: 2 },
    ]);
    return (
        <AppContext.Provider value={[notes, setNotes]}>
            {children}
        </AppContext.Provider>
    );
}

export const AppContext = createContext();
