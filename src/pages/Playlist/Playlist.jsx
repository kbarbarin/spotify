import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../utils/Context/AuthContext";

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
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '30%', width: "100%" }}>
                <img width={"10%"} src={location.state.playlist.images[0].url} alt="" />
                <div>
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