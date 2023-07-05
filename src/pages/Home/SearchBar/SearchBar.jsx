import searchPlaylists from "../../../api/Search/searchPlaylists";

export default function SearchBar({token, setResult, option, setSearchKey, searchKey}) {

    return (
        <div>
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button onClick={() => searchPlaylists(token, searchKey, setResult, option)}>Search</button>
        </div>
    );
}