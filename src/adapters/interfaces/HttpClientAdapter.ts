export interface HttpRequestOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  responseType?: "json" | "text" | "blob" | "arraybuffer";
}

export interface HttpResponse<T = any> {
  status: number;
  data: T;
}

export interface HttpClient {
  get<T = any>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>>;

  post<T = any>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>>;

  put<T = any>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>>;

  delete<T = any>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>>;
}
