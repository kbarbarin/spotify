import { useState } from "react";

import searchPlaylists from "../../../api/Search/searchPlaylists";

export default function SearchBar(token, setPlaylists) {
  const [searchKey, setSearchKey] = useState("");

    return (
        <div>
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button onClick={() => searchPlaylists(token, searchKey, setPlaylists)}>Search</button>
        </div>
    );
}