import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import moment from "moment";

import getPlaylist from "../../../api/getPlaylist/getPlaylist";
import PlaylistElementsCard from "./PlaylistElementCard/PlaylistElementCard";
import { AuthContext } from "../../../utils/Context/AuthContext";

import './PlaylistElements.css'

export default function PlaylistElements() {
    const { id } = useParams();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const { playlist, setPlaylist } = useContext(AuthContext);

    useEffect(() => {
        moment.locale('fr');
        const fetchPlaylist = async () => {
            await getPlaylist(location.state.token, id, setPlaylist);
            setLoading(false);
        };
        if (loading)
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
                    <hr className="line" />
                    {playlist?.tracks?.items.map((track, index) => (
                        <div key={index}>
                        <PlaylistElementsCard track={track} index={index}/>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}