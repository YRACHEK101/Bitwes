export async function getNews(): Promise<string[]> {
  const res = await fetch(
    "http://localhost:3000/json/news.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news data");
  }

  return res.json();
}
