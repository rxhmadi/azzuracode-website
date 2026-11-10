/**
 * Helper functions untuk artikel.
 */
import { getCollection } from 'astro:content';

/** Format tanggal ke format Indonesia, contoh: "12 Maret 2025" */
export function formatDateID(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Format tanggal ke ISO string untuk schema.org & meta tags */
export function toISO(date: Date): string {
  return date.toISOString();
}

/** Hitung estimasi waktu baca berdasarkan jumlah kata */
export function readingTime(content: string): number {
  const wordsPerMinute = 200; // rata-rata dewasa
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/** Ambil semua artikel yang sudah publish (bukan draft), urutkan terbaru di atas */
export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return articles.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

/** Ambil semua tag unik dari artikel */
export async function getAllTags() {
  const articles = await getPublishedArticles();
  const tagSet = new Set<string>();
  articles.forEach((article) => {
    article.data.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
