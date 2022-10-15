import axios from 'axios';

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        // key: "AIzaSyCz027McDDb2LfFL4icBcAoRK3nzUAJ0so",
        key: "AIzaSyDGr3kg1d-HhKA3By1ZpWphaJvmO7dt-ZU"
    },
})

export default request;