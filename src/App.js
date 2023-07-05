import { useEffect, useState } from "react";

import SearchBar from "./pages/Home/SearchBar/SearchBar.jsx";
import DisplayResult from "./pages/Home/DisplayResult/DisplayResult.jsx";

import connect from "./api/connect.jsx";
import OptionBar from "./pages/Home/OptionBar/OptionBar.jsx";

function App() {
  const [token, setToken] = useState("test");
  const [results, setResult] = useState([]);
  const [option, setOption] = useState("playlist");
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

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
          <SearchBar token={token} setResult={setResult} option={option} setSearchKey={setSearchKey} searchKey={searchKey}/>
          <OptionBar option={option} setOption={setOption} token={token} results={results} setResult={setResult} setSearchKey={setSearchKey} searchKey={searchKey}/>
          <DisplayResult token={token} results={results}/>
        </div>
          :
          <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;