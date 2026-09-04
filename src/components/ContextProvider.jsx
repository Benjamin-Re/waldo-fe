import { createContext, useState } from "react";

export const GameContext = createContext(null)

export function ContextProvider({ children }) {
    const [username, setUsername] = useState("")
    return (
        <GameContext value={{ username, setUsername }}>
            {children}
        </GameContext>
    )
}
