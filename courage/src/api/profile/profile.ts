import { BASE_URL } from "../baseurl";
import { getAccessToken } from "libs/tokenStorage";

interface ProfileResponse {
  userId: string;
  products: number[]; // 게시글 ID 리스트
}

export async function fetchUserProfile(): Promise<ProfileResponse> {
  const token = getAccessToken();
  console.log("🔐 accessToken:", token); // ✅ 토큰 확인용 로그

  if (!token) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("📡 fetch 요청 완료:", res.status); // ✅ 응답 상태 코드 로그

  if (!res.ok) {
    let errorMsg = "프로필 조회 실패";
    try {
      const error = await res.json();
      errorMsg = error.message || errorMsg;
    } catch (e) {
      console.warn("❗ 응답 파싱 실패 (JSON 아님)");
    }
    throw new Error(errorMsg);
  }

  const data = await res.json();
  console.log("✅ 프로필 조회 결과:", data); // ✅ 응답 데이터 로그
  return data;
}
