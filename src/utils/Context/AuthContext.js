import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [token, setToken] = useState("");
    const [result, setResult] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [option, setOption] = useState("playlist");
    
    return (
        <AuthContext.Provider
            value={{
                token, setToken,
                result, setResult,
                playlist, setPlaylist,
                option, setOption
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}