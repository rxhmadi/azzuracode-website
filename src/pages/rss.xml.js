import rss from '@astrojs/rss';
import { getPublishedArticles } from '../lib/articles';
import { SITE } from '../lib/site';

export async function GET(context) {
  const articles = await getPublishedArticles();

  return rss({
    title: `${SITE.name} — Artikel terbaru`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/blog/${article.id}/`,
      author: article.data.author,
      categories: article.data.tags,
    })),
    customData: `<language>id-id</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}
