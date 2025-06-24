import { BASE_URL } from "../baseurl";
import { setTokens } from "libs/tokenStorage";

export async function signupUser(userId: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "회원가입 실패");
  }

  return await res.json();
}

export async function signinUser(
  userId: string,
  password: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("❌ 로그인 실패 응답:", error);
    throw new Error(error.message || "로그인 실패");
  }

  const json = await res.json();
  console.log("📥 서버 응답:", json);

  const { accessToken, refreshToken } = json.data;

  console.log("✅ 로그인 성공: accessToken:", accessToken);
  console.log("✅ 로그인 성공: refreshToken:", refreshToken);

  setTokens(accessToken, refreshToken);

  console.log("📦 저장된 accessToken:", localStorage.getItem("accessToken"));
  console.log("📦 저장된 refreshToken:", localStorage.getItem("refreshToken"));

  return { accessToken, refreshToken };
}
