import { useEffect, useState } from "react";

import SearchBar from "./pages/Home/SearchBar/SearchBar.jsx";
import SearchResult from "./pages/Home/SearchResult/SearchResult.jsx";

import connect from "./api/connect.jsx";

function App() {
  const [token, setToken] = useState("test");
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await connect(setToken);
      setToken(token);
      setLoading(false);
    };

    fetchToken();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
      </header>
      <div>
        {!loading ? <div>
          <SearchBar token={token} setPlaylists={setPlaylists}/>
          <SearchResult token={token} playlists={playlists}/>
        </div>
          :
          <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;