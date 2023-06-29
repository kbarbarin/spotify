import axios from "axios";

export default async function searchPlaylists({token, searchKey, setPlayLists}) {
  const { data } = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "playlist"
    }
  })
  console.log(JSON.stringify(data));
  setPlayLists(data.playlists.items)
}
