import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [token, setToken] = useState("");
    const [result, setResult] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [option, setOption] = useState("playlist");
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

    
    return (
        <AuthContext.Provider
            value={{
                token, setToken,
                result, setResult,
                playlist, setPlaylist,
                option, setOption,
                screenSize
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}