import { useEffect, useState } from "react";

import connect from "./api/connect.jsx";
import searchPlaylists from "./api/Search/searchPlaylists.jsx";

function App() {
  const [token, setToken] = useState("test");
  const [searchKey, setSearchKey] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      connect(setToken);
      setLoading(false);
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
      </header>
      <div>
        {!loading ? <div>
          <form onSubmit={() => searchPlaylists(token, searchKey, setPlaylists)}>
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
          {playlists.map(playlist => (
            <div key={playlist.id}>
              {playlist.images.length ? <img width={"10%"} src={playlist.images[0].url} alt="" /> : <div>No Image</div>}
              {playlist.name}
            </div>
          ))}
        </div>
          :
          <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;