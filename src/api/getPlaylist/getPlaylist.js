import axios from "axios";

export default async function getPlaylist (token, id, setPlaylist) {
    await axios.get("https://api.spotify.com/v1/playlists/" + id, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      if (response.status === 200) {
        setPlaylist(response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });

}