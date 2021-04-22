import { createContext, useEffect, useState } from 'react';
import Notes from 'src/Data';

export const AppContext = createContext();

export function AppWrapper({ children }) {
    const [notes, setNotes] = useState([]);
    return (
        <AppContext.Provider value={[notes, setNotes]}>
            {children}
        </AppContext.Provider>
    );
}
