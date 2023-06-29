import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default async function connect(props) {
    console.log("props = " + JSON.stringify(props));

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    // axios.post(authOptions.url, authOptions.form, { headers: authOptions.headers })
        // .then(response => {
            // if (response.status === 200) {
                // const token = response.data.access_token;
                // console.log('token = ' + token);
                // props.setToken("reussi");
            // }
        // })
        // .catch(error => {
            // console.log(error);
        // });
}
