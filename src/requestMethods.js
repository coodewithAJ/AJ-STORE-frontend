import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWFhOWU5NTVmNmUxMWUwOGUyOWExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjgxMDk1MX0.hkZqjTHnOVmcG0STZr6aHuENTxdQ8tAYlJgbMU7iTC4"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})