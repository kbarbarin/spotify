import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";

export default function Playlist () {
    const location = useLocation();

    return (
        <>
            <div style={{display: "flex",flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: '30%', width: "100%"}}>
                <img width={"10%"} src={location.state.playlist.images[0].url} alt="" />
                <h1>{location.state.playlist.name}</h1>
            </div>
                <Outlet />
            </>
    )
}