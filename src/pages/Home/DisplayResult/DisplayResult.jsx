export default function DisplayResult({ results }) {
    return (
        <>
            {results.map(element => (
                <div key={element.id}>
                    {element?.images?.length ? <img width={"10%"} src={element.images[0].url} alt="" /> : 
                    element?.album?.images[1]?.url ? <img width={"10%"} src={element.album.images[1].url} alt="" /> : <div>No Image</div>}
                    {element.name}
                </div>
            ))}
        </>

    );
}