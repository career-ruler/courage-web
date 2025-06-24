import { BASE_URL } from "../baseurl";
import { getAccessToken } from "libs/tokenStorage";

interface CreatePostParams {
  title: string;
  description: string;
  picture: File | null;
  category: string;
}

interface CreatePostResponse {
  boardId: number;
  userId: string;
  title: string;
  description: string;
  picture: string; // 이미지 URL 등
  category: string;
  createdDate: string;
}

export async function createPost({
  title,
  description,
  picture,
  category,
}: CreatePostParams): Promise<CreatePostResponse> {
  const accessToken = getAccessToken();
  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  if (picture) formData.append("picture", picture);
  formData.append("category", category);

  const res = await fetch(`${BASE_URL}/board`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // 'Content-Type': 'multipart/form-data'는 브라우저가 자동으로 설정함
    },
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "게시물 생성 실패");
  }

  return await res.json();
}
