import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";
import { HttpClient, HttpResponse } from "./interfaces/HttpClientAdapter.ts";

export class AxiosAdapter implements HttpClient {
  protected axiosInstance: AxiosInstance;

  constructor(readonly baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }
  async delete<T = any>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    return await this.axiosInstance.delete(url, { params, headers });
  }
  async get<T = any>(
    url: string,
    params?: Record<string, any>,
    headers?: RawAxiosRequestHeaders
  ): Promise<HttpResponse<T>> {
    const { data } = await this.axiosInstance.get(url, { params, headers });
    return data;
  }

  async post<T = any>(
    url: string,
    data?: any,
    headers?: RawAxiosRequestHeaders
  ): Promise<HttpResponse<T>> {
    const res = await this.axiosInstance.post(url, data, {
      headers,
    });

    return res;
  }
  async put<T = any>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    const { data: response } = await this.axiosInstance.put(url, {
      data,
      headers,
    });
    return response;
  }
}
