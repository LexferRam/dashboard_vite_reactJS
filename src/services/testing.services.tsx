import axios from "axios"

export const testingservice = () => {
    return axios.get("https://123rickandmortyapi.com/api/character/2")
}