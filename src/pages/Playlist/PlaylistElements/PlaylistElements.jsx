import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import moment from "moment";

import getPlaylist from "../../../api/getPlaylist/getPlaylist";
import { AuthContext } from "../../../utils/Context/AuthContext";

import './PlaylistElements.css'

export default function PlaylistElements() {
    const { id } = useParams();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const {playlist, setPlaylist} = useContext(AuthContext);

    useEffect(() => {
        moment.locale('fr')
        const fetchPlaylist = async () => {
            await getPlaylist(location.state.token, id, setPlaylist);
            setLoading(false);
        };

        fetchPlaylist();
    });

    return (
        <>
            {!loading &&
                <div className="playlistElements-container">
                    <div style={{ display: "flex" }}>
                        <div style={{ textAlign: 'center', flex: 1 / 21 }}>
                            <h3>#</h3>
                        </div>
                        <div style={{ flex: 7.5 / 21 }}>
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
                    {playlist.tracks.items.map((track, index) => (
                        <div key={index} style={{ display: "flex" }}>
                            <div style={{ textAlign: 'center', flex: 1 / 21 }}>
                                <p>{index + 1}</p>
                            </div>
                            <div style={{ display: 'flex', flex: 7.5 / 21 }}>
                                <img src={track.track?.album.images[2].url} height={64} width={64} alt="" />
                                <div style={{marginLeft: "15px"}}>
                                    <p style={{color: 'white'}}>{track.track?.name}</p>
                                    <p>{track.track?.artists[0].name}</p>
                                </div>
                            </div>
                            <div style={{ flex: 5.5 / 21 }}>
                                <p>{track.track?.album.name}</p>
                            </div>
                            <div style={{ flex: 5.5 / 21 }}>
                            
                                <p> {moment(track.added_at).format('D MMMM YYYY')}</p>
                            </div>
                            <div style={{ flex: 1.5 / 21 }}>
                                <p>{track.track?.duration_ms}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}