import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:1337",
  withCredentials: true,
});

type HttpRequestType = <R>(params: AxiosRequestConfig) => AxiosPromise<R>;

export const httpGet: HttpRequestType = (params) =>
  httpClient({
    method: "get",
    ...params,
  });

export const httpPost: HttpRequestType = (params) =>
  httpClient({
    method: "post",
    ...params,
  });
