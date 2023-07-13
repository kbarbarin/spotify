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
        if (playlist?.description) {
            console.log(playlist);
            setLoading(false);
        }
    }, [playlist]);

    const getTotalTime = () => {
        var totalDuration = 0;

        for (var i = 0; i !== playlist.tracks.items.length; i++)
            totalDuration += playlist.tracks.items[i].track.duration_ms;
        const hours = Math.floor((totalDuration / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((totalDuration / (1000 * 60)) % 60);

        return (hours.toString() + ' h ' + minutes.toString() + ' min');
    }

    return (
        <>
            <div className="playlist-container">
                <img className="playlist-image" src={location.state.playlist.images[0].url} alt="" />
                <div className="playlist-child">
                    <h3 style={{color: 'white'}}>Playlist</h3>
                    <h1 style={{color: 'white'}}>{location.state.playlist.name}</h1>
                    {!loading &&
                        <>
                            <p style={{marginTop: '15px', marginBottom: '15px'}}>{playlist.description}</p>
                            <div style={{ display: 'flex' }}>
                                <img src={playlist?.owner} alt="" />
                                <p style={{color: 'white'}}>
                                    <a className="link" href={playlist.owner.external_urls.spotify}>{playlist.owner.display_name}</a> • {playlist.followers.total} {playlist.followers.total > 1 ? "likes" : "like"} • {playlist.tracks.total} {playlist.tracks.total > 1 ? "titres" : "titre"},&nbsp;
                                </p>
                                <p>{getTotalTime()}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}