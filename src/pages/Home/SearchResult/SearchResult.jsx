export default function SearchResult({ playlists }) {
    return (
        <>
            {playlists.map(playlist => (
                <div key={playlist.id}>
                    {playlist.images.length ? <img width={"10%"} src={playlist.images[0].url} alt="" /> : <div>No Image</div>}
                    {playlist.name}
                </div>
            ))}
        </>

    );
}