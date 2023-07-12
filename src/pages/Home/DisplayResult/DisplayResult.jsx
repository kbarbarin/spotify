import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../utils/Context/AuthContext.js"

import './DisplayResult.css'

export default function DisplayResult() {
    const { token, result, option } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleNavigation = (element) => {
        if (option === "playlist")
            navigate('/playlist/' + element.id, { state: { playlist: element, token: token } });
    }

    return (
        <>
            <div className="result-container">
                {result.map(element => (
                    <div onClick={() => handleNavigation(element)} key={element.id} className="result-info">
                        {element?.images?.length ? <img className={option !== "artist" ? "result-img" : "result-img-artist"} src={element.images[0].url} alt="" /> :
                            element?.album?.images[1]?.url ? <img className="result-img" src={element.album.images[1].url} alt="" /> : <div>No Image</div>}
                        {element.name}
                    </div>
                ))}
            </div>
        </>
    );
}