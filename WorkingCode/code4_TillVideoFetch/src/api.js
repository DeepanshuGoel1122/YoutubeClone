import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyCz027McDDb2LfFL4icBcAoRK3nzUAJ0so",
    },
})

export default request;