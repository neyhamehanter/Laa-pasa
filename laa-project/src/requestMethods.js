import axios from "axios";

const BASE_URL ="http://localhost:5000/api/"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGQ1MmZiOTlhNmQ2NjQ1YmFmYmU3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMzExNTQ4MCwiZXhwIjoxNzEzMzc0NjgwfQ.UUrJ-Oi5vSJq4IAdHijlE7Bs7hNgP40_dr_ier-BbX8"

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})