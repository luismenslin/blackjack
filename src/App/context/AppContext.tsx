import React from 'react';

interface AppContextProps {
    isMobile: boolean;
}

export const AppContext = React.createContext<AppContextProps>({
    isMobile: false,
})