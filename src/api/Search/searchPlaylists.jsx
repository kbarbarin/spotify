import axios from "axios";

export default async function searchPlaylists(token, searchKey, setPlayLists) {
  await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "playlist"
    }
  })
    .then(response => {
      if (response.status === 200) {
        console.log(JSON.stringify(response.data));
        setPlayLists(response.data.playlists.items);
      }
    })
    .catch(error => {
      console.log(error);
    });
}
