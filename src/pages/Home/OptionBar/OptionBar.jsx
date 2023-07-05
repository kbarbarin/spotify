import searchPlaylists from "../../../api/Search/searchPlaylists";

export default function OptionBar({option, setOption, results, setResult, token, searchKey}) {

    const handleSelection = (selection) => {
        setOption(selection);
        console.log(results);
        if (results?.length)
            searchPlaylists(token, searchKey, setResult, option);
    }
    return (
        <li style={{display: "flex"}} >
            <ul style={option === "playlist" ? {color: 'green'} : {color: 'black'}} onClick={() => handleSelection("playlist")}>Playlists</ul>
            <ul style={option === "artist" ? {color: 'green'} : {color: 'black'}} onClick={() => handleSelection("artist")}>Artists</ul>
            <ul style={option === "album" ? {color: 'green'} : {color: 'black'}} onClick={() => handleSelection("album")}>albums</ul>
            <ul style={option === "track" ? {color: 'green'} : {color: 'black'}} onClick={() => handleSelection("track")}>Titres</ul>
        </li>
    )
}