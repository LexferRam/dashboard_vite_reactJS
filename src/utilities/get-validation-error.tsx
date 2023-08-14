import { TypeWithKey } from "../models"

export const getValidationError = (errorCode: any) => {

    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: 'Network Error',
        ERR_CANCELED: 'Request canceled',
        ERR_INTERNET_DISCONNECTED: 'Internet disconnected'
    } 

    return codeMatcher[errorCode] || "Unknown error"
}