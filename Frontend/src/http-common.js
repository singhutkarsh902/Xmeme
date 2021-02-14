import axios from "axios";

const URL = process.env.REACT_APP_URL || "http://localhost:8081";

export default axios.create({
    baseURL: URL,
    headers: {
        "Content-type": "application/json"
    }
});