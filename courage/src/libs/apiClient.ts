import { getAccessToken } from "./tokenStorage";

export const apiClient = async (url: string, options: RequestInit = {}) => {
  const token = getAccessToken();

  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };

  const res = await fetch(url, { ...options, headers });

  // 필요시 여기서 401 처리로 토큰 갱신 로직도 가능

  return res;
};
