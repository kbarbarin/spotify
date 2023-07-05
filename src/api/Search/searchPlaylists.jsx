import axios from "axios";

export default async function searchPlaylists(token, searchKey, setResult, option) {
  console.log('option = ' + option);
  await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: option
    }
  })
    .then(response => {
      if (response.status === 200) {
        if (option === "playlist")
        setResult(response.data.playlists.items);
        else if (option === "artist")
        setResult(response.data.artists.items);
        else if (option === "album")
        setResult(response.data.albums.items);
        else if (option === "track")
        setResult(response.data.tracks.items);

      }
    })
    .catch(error => {
      console.log(error);
    });
}
