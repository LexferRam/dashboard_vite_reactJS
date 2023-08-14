import axios, { AxiosRequestConfig } from "axios"
import { getValidationError } from "../utilities"
import { SnackbarUtilities } from "../utilities/snackbar-manager"

export const AxiosInterceptor = () => {

    const updateHeader = (request: AxiosRequestConfig) => {
        const token = '1212121212121212121221'
        const newHeaders = {
            Authorization: token,
            "Content-Type": "application/json"
        }
        request.headers = newHeaders;
        return request;
    }

    axios.interceptors.request.use((request) => {
        if (request.url?.includes('assets')) return request
        return updateHeader(request)
    })

    axios.interceptors.response.use(
        (response) => {
            console.log(response)
            return response
        }, 
        (error) => {
            if(getValidationError(error.code) === 'Request canceled') return
            SnackbarUtilities.error(getValidationError(error.code))
            return Promise.reject(error)
        }
    )
}
