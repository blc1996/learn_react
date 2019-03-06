// axios
//     .get("https://api.unsplash.com/search/photos", {
//         params: {query: term},
//         headers: {
//             Authorization: "Client-ID 71a4298a64e07f95c561b0d2a487b21f471d02da23820cf7458d53c98649d4b3"
//         }
//     })
//     .then((response) => { //or use async keyword
//         console.log(response.data.results);
//     });

import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID toBeFil71a4298a64e07f95c561b0d2a487b21f471d02da23820cf7458d53c98649d4b3led"
    }
});
