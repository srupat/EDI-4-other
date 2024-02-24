import { apiClient } from "./ApiClient"

export const createTemplateApi = 
    (templateJson) =>  apiClient.post(`/create/template`, templateJson)

