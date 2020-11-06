import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

function generateAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
  return axios.create({ ...apiConfig })
}

function generateFormDataAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
  const formDataConfig: AxiosRequestConfig = {
    ...apiConfig,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  return generateAxiosInstance(formDataConfig)
}

function createFormData(object: any): FormData {
  const formData: FormData = new FormData()

  Object.keys(object).forEach((key) => formData.append(key, object[key]))

  return formData
}

export default abstract class HttpClient {
  // private _apiConfig: AxiosRequestConfig
  private _AXIOS: AxiosInstance
  private _AXIOS_FORM: AxiosInstance

  constructor(apiConfig: AxiosRequestConfig) {
    this._AXIOS = generateAxiosInstance(apiConfig)
    this._AXIOS_FORM = generateFormDataAxiosInstance(apiConfig)

    this._AXIOS.interceptors.response.use(
      (response) => this.onResponseSuccess(response),
      (error) => this.onResponseError(error, this._AXIOS),
    )

    this._AXIOS_FORM.interceptors.response.use(
      (response) => this.onResponseSuccess(response),
      (error) => this.onResponseError(error, this._AXIOS_FORM),
    )
  }

  protected get<T>(urlPath: string, params?: any): Promise<T> {
    return this._AXIOS.get(urlPath, { params })
  }

  protected post<T>(urlPath: string, data?: any): Promise<T> {
    return this._AXIOS.post(urlPath, data)
  }

  protected put<T>(urlPath: string, data?: any): Promise<T> {
    return this._AXIOS.put(urlPath, data)
  }

  protected patch<T>(urlPath: string, data?: any): Promise<T> {
    return this._AXIOS.patch(urlPath, data)
  }

  protected delete<T>(urlPath: string): Promise<T> {
    return this._AXIOS.delete(urlPath)
  }

  protected postFormData<T>(urlPath: string, data: any): Promise<T> {
    return this._AXIOS_FORM.post(urlPath, createFormData(data))
  }

  protected onResponseSuccess(response: AxiosResponse): any {
    return response.data
  }

  protected onResponseError(error: any, _axios: AxiosInstance): any {
    return Promise.reject(error)
  }
}
