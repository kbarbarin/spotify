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
                    <h1>Titres:</h1>
                    {playlist.map((track, index) => (
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} key={index}>
                            <p>{index + 1}</p>
                            <img src={track.track.album.images[2].url} height={64} width={64} alt="" />
                            <div>
                            <p>{track.track.name}</p>
                            <p>{track.track?.artists[0].name}</p>
                            </div>
                            <p>{track.track.album.name}</p>
                            <p>{track.added_at}</p>
                            <p>{track.track.duration_ms}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}