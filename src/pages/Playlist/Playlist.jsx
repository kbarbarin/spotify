import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../utils/Context/AuthContext";

import './Playlist.css';

export default function Playlist() {
    const { playlist } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const location = useLocation();

    useEffect(() => {
        if (playlist.length) {
            console.table(playlist);
            setLoading(false);
        }
    }, [playlist]);

    return (
        <>
            <div className="playlist-container">
                <img width={"10%"} src={location.state.playlist.images[0].url} alt="" />
                <div className="playlist-child">
                    <h3>Playlist</h3>
                    <h1>{location.state.playlist.name}</h1>
                    {!loading &&
                        <>
                            <p>{playlist.description}</p>
                            <div style={{ display: 'flex' }}>
                                {playlist.likes}
                            </div>
                        </>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}