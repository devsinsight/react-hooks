import React from "react";

const defaultValues = {
    color: 'blue',
    backgroundColor: 'white'
}


export const ThemeContext = React.createContext(defaultValues);