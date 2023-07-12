import { useContext, useEffect, useState } from "react";

import SearchBar from "./SearchBar/SearchBar.jsx";
import DisplayResult from "./DisplayResult/DisplayResult.jsx";
import moment from "moment";

import connect from "../../api/connect.jsx";
import OptionBar from "./OptionBar/OptionBar.jsx";
import { AuthContext } from "../../utils/Context/AuthContext.js"

import './Home.css'

function Home() {
    const {setToken} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      await connect(setToken);
      moment.locale("fr");
      setLoading(false);
    };

    fetchToken();
  });


  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw'}}>
        {!loading ? <div>
          <SearchBar setSearchKey={setSearchKey} searchKey={searchKey}/>
          <OptionBar setSearchKey={setSearchKey} searchKey={searchKey}/>
          <DisplayResult />
        </div>
          :
          <p>loading...</p>
        }
    </div>
  );
}

export default Home;