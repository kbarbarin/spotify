import { useContext, useState } from "react";
import moment from "moment";

import './PlaylistElementCard.css';
import { AuthContext } from "../../../../utils/Context/AuthContext";

export default function PlaylistElementsCard({ track, index }) {
    const [isHover, setIsHover] = useState(false);
    const { screenSize } = useContext(AuthContext);

    const calculateTime = (ms) => {
        const min = Math.floor((ms / 1000 / 60) << 0);
        const sec = Math.floor((ms / 1000) % 60);

        return (min.toString() + ':' + sec.toString());
    }

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={isHover ? "playlistElementCard-container-hover" : "playlistElementCard-container"}
        >
            <div className="playlistElementCard-player" style={screenSize.width >= 900 ? { textAlign: 'center', flex: 1 / 21 } : { textAlign: 'center', flex: 2 / 21 }}>
                {isHover ? <p >▶️</p> : <p>{index + 1}</p>}
            </div>
            <div className="playlistElementCard-flex" style={screenSize.width >= 900 ? { flex: 7.5 / 21 } : { textAlign: 'center', flex: 17 / 21 }}>
                <img src={track.track?.album.images[2].url} height={64} width={64} alt="" />
                <div style={{ marginLeft: "15px" }}>
                    <p style={{ color: 'white' }}>{track.track?.name}</p>
                    <p>{track.track?.artists[0].name}</p>
                </div>
            </div>
            {screenSize.width >= 900 &&
                <><div className="playlistElementCard-flex" style={{ flex: 5.5 / 21 }}>
                    <p>{track.track?.album.name}</p>
                </div>
                    <div className="playlistElementCard-flex" style={{ flex: 5.5 / 21 }}>
                        <p> {moment(track.added_at).format('D MMMM YYYY')}</p>
                    </div>
                </>
            }
            <div className="playlistElementCard-flex" style={screenSize.width >= 900 ? { justifyContent: 'space-between', flex: 1.5 / 21 } : { justifyContent: 'space-around', flex: 2 / 21 }}>
                <p>{calculateTime(track.track?.duration_ms)}</p>
                {isHover && <p style={{ marginRight: '35px', marginBottom: '12px', fontSize: '24px', color: 'white' }}>...</p>}
            </div>
        </div>
    )
}