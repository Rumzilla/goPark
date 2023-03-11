import axios from 'axios';

export default axios.create({
    baseUrl: "http://13.115.195.252/",
    headers: {
        "Content-Type": "application/json"
    },
});