import { useNavigate } from "react-router";

export default function DisplayResult({ results, option, token }) {
    const navigate = useNavigate();

    const handleNavigation = (element) => {
        if (option === "playlist")
            navigate('/playlist/' + element.id, {state: {playlist: element, token: token}});
    }

    return (
        <>
            {results.map(element => (
                <div onClick={() => handleNavigation(element)} key={element.id}>
                    {element?.images?.length ? <img width={"10%"} src={element.images[0].url} alt="" /> : 
                    element?.album?.images[1]?.url ? <img width={"10%"} src={element.album.images[1].url} alt="" /> : <div>No Image</div>}
                    {element.name}
                </div>
            ))}
        </>

    );
}