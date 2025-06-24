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
  picture: string;
  category: string;
  createdDate: string;
}

export interface PostForms {
  boardId: number;
  userId?: string;
  title: string;
  picture: string;
  createdDate: string;
  category: string;
}
  

interface Reply {
  username: string;
  content: string;
}

interface Comment {
  username: string;
  content: string;
  replies: Reply[];
}

interface DetailPostResponse {
  boardId: number;
  userId: string;
  title: string;
  description: string;
  picture: string;
  category: string;
  createdDate: string;
  comments: Comment[];
}
  

export async function createPost(
  params: CreatePostParams
): Promise<CreatePostResponse> {
  const accessToken = getAccessToken();
  if (!accessToken) throw new Error("로그인이 필요합니다.");

  const formData = new FormData();
  formData.append("title", params.title);
  formData.append("description", params.description);
  if (params.picture) formData.append("picture", params.picture);
  formData.append("category", params.category);

  Array.from(formData.entries()).forEach(([key, value]) => {
    console.log("formData", key, value);
  });

  const res = await fetch(`${BASE_URL}/board`, {
    method: "POST",
    headers: {
      // 'Content-Type': 'multipart/form-data'  <-- 이거 절대 넣지 말 것
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });

  console.log("📡 POST /board 응답 상태:", res.status);

  if (!res.ok) {
    try {
      const errorData = await res.json();
      throw new Error(errorData.message || "게시물 생성 실패");
    } catch {
      throw new Error("게시물 생성 실패 (응답 파싱 실패)");
    }
  }

  return await res.json();
}

export async function fetchAllPosts(): Promise<PostForms[]> {
  const token = getAccessToken();
  if (!token) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/board`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log("📡 /board 전체 게시글 fetch 응답 상태:", res.status);

  if (!res.ok) {
    let errorMsg = "게시글 목록 조회 실패";
    try {
      const error = await res.json();
      errorMsg = error.message || errorMsg;
    } catch {
      console.warn("❗ 응답 JSON 파싱 실패");
    }
    throw new Error(errorMsg);
  }

  const posts: PostForms[] = await res.json();

  posts.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  console.log("✅ 전체 게시글 목록:", posts);

  return posts;
}

export async function fetchPostsByCategory(
  category?: string
): Promise<PostForms[]> {
  const token = getAccessToken();
  if (!token) throw new Error("로그인이 필요합니다.");

  const url =
    category && category !== "전체"
      ? `${BASE_URL}/board/category?category=${encodeURIComponent(category)}`
      : `${BASE_URL}/board`;

  console.log("📡 fetchPostsByCategory 호출 URL:", url);

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log("📡 fetchPostsByCategory 응답 상태:", res.status);

  if (!res.ok) {
    let msg = "게시글 조회 실패";
    try {
      const err = await res.json();
      msg = err.message || msg;
    } catch {}
    throw new Error(msg);
  }

  const posts: PostForms[] = await res.json();

  console.log("✅ fetchPostsByCategory 응답 데이터:", posts);

  return posts;
}
  

export async function fetchPostDetail(id: number): Promise<DetailPostResponse> {
  const token = getAccessToken();
  if (!token) throw new Error("로그인이 필요합니다.");

  const res = await fetch(`${BASE_URL}/board/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    let msg = "게시글 상세 조회 실패";
    try {
      const err = await res.json();
      msg = err.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return await res.json();
}