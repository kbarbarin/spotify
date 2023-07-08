import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import getPlaylist from "../../../api/getPlaylist/getPlaylist";

export default function PlaylistElements() {
    const { id } = useParams();
    const location = useLocation();
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchToken = async () => {
            await getPlaylist(location.state.token, id, setPlaylist);
            setLoading(false);
        };

        fetchToken();
    }, [id, location.state.token]);

    return (
        <div>
            {!loading &&
                <div>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: 'flex', flex: 8.5 / 21 }}>
                            <h3>#</h3>
                            <h3>Titre</h3>
                        </div>
                        <div style={{ flex: 5.5 / 21 }}>
                            <h3>Album</h3>
                        </div>
                        <div style={{ flex: 5.5 / 21 }}>
                            <h3>Date d'ajout</h3>
                        </div>
                        <div style={{ flex: 1.5 / 21 }}>
                            <h3>Durée</h3>
                        </div>
                    </div>
                    {playlist.map((track, index) => (
                        <div style={{ display: "flex" }}>
                            <div style={{ display: 'flex', flex: 8.5 / 21 }}>
                                <p>{index + 1}</p>
                                <img src={track.track.album.images[2].url} height={64} width={64} alt="" />
                                <div>
                                    <p>{track.track.name}</p>
                                    <p>{track.track?.artists[0].name}</p>
                                </div>
                            </div>
                            <div style={{ flex: 5.5 / 21 }}>
                                <p>{track.track.album.name}</p>
                            </div>
                            <div style={{ flex: 5.5 / 21 }}>
                                <p>{track.added_at}</p>
                            </div>
                            <div style={{ flex: 1.5 / 21 }}>
                                <p>{track.track.duration_ms}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}