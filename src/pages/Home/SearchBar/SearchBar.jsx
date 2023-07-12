import { useContext } from "react";
import searchPlaylists from "../../../api/search/searchPlaylists";
import { AuthContext } from "../../../utils/Context/AuthContext.js";

import './SearchBar.css';

export default function SearchBar({ setSearchKey, searchKey }) {
    const { token, setResult, option } = useContext(AuthContext);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchPlaylists(token, searchKey, setResult, option)
        }
    };

    return (
        <div className="searchBar-container">
            <input type="text" onChange={e => setSearchKey(e.target.value)} onKeyDown={handleKeyDown} className="searchBar-input"placeholder="🔍 Que souhaitez-vous écouter ?"/>
        </div>
    );
}