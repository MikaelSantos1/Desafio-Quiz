import axios from "axios";
export const api = axios.create({
    baseURL:"https://quizapi.io/api/v1",
    headers:{
        "X-API-Key":"x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed",
        
    }
})
