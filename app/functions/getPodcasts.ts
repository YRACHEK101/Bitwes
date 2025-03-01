export type PodcastType = {
  id: number;
  title: string;
  img: string;
  imgAlt: string;
  date: string;
  duration: string;
  episode: string;
  slug: string;
  content: {
    summary: string;
    section1: string;
    quote: [string, string];
    section2: string;
  }[];
};

export async function getPodcasts(): Promise<PodcastType[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bitwes.vercel.app';
  const res = await fetch(`${baseUrl}/json/podcasts.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  return res.json();
}
