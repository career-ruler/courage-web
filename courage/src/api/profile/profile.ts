import { BASE_URL } from "api/baseurl";
import { getAccessToken } from "libs/tokenStorage";

interface ProductPost {
  boardId: number;
  title: string;
  picture: string;
  category: string;
  createdDate: string;
}

interface ProfileResponse {
  userId: string;
  products: ProductPost[];
}

export async function fetchUserProfile(): Promise<ProfileResponse> {
  const token = getAccessToken();
  console.log("🔐 accessToken:", token);

  if (!token) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("📡 /profile fetch 응답 상태:", res.status);

  if (!res.ok) {
    let errorMsg = "프로필 조회 실패";
    try {
      const error = await res.json();
      errorMsg = error.message || errorMsg;
    } catch {
      console.warn("❗ 응답 JSON 파싱 실패");
    }
    throw new Error(errorMsg);
  }

  const data: ProfileResponse = await res.json();
  console.log("✅ 프로필 조회 결과:", data);
  return data;
}
