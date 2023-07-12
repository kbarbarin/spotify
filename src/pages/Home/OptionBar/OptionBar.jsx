import { useContext } from "react";
import searchPlaylists from "../../../api/search/searchPlaylists";
import { AuthContext } from "../../../utils/Context/AuthContext.js"

import "./OptionBar.css"

export default function OptionBar({ searchKey }) {
    const {option, setOption, result, setResult, token} = useContext(AuthContext);

    const handleSelection = (selection) => {
        setOption(selection);
        console.log(result);
        if (result?.length) { 
            searchPlaylists(token, searchKey, setResult, selection);
            console.log('new search');
        }
    }
    return (
        <ul>
            <li className={option === "playlist" ? "li-focus" : undefined} onClick={() => handleSelection("playlist")}>Playlists</li>
            <li className={option === "artist" ? "li-focus" : undefined} onClick={() => handleSelection("artist")}>Artistes</li>
            <li className={option === "album" ? "li-focus" : undefined} onClick={() => handleSelection("album")}>Albums</li>
            <li className={option === "track" ? "li-focus" : undefined} onClick={() => handleSelection("track")}>Titres</li>
        </ul>
    )
}