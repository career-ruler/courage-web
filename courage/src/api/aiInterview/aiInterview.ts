const BASE_URL = "https://6724-2a09-bac5-474b-1482-00-20b-80.ngrok-free.app";

export async function generateQuestion(userInput: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/generate_question`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category: "Ai",
      question: userInput,
    }),
  });
  if (!res.ok) throw new Error("질문 생성 실패");
  const data = await res.json();
  return data.question;
}

export async function generateAnswer(lastQuestion: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/generate_answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answer: lastQuestion,
    }),
  });
  if (!res.ok) throw new Error("답변 생성 실패");
  const data = await res.json();
  return typeof data === "string" ? data : data.answer;
}
