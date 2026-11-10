<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="utf-8" />
  <xsl:template match="/">
    <html lang="id">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS Feed</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'IBM Plex Sans', -apple-system, sans-serif; background: #ffffff; color: #0f0f0f; line-height: 1.6; padding: 2rem 1rem; }
          .container { max-width: 640px; margin: 0 auto; }
          .banner { background: #f8f8f8; border: 1px solid #efefef; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem; }
          .banner h1 { font-size: 1.1rem; margin-bottom: 0.5rem; }
          .banner p { font-size: 0.9rem; color: #6b6b6b; }
          .item { padding: 1rem 0; border-bottom: 1px solid #efefef; }
          .item:last-child { border-bottom: none; }
          .item a { color: #0f0f0f; text-decoration: none; font-weight: 500; font-size: 1rem; }
          .item a:hover { color: #6b6b6b; }
          .item .meta { font-size: 0.8rem; color: #6b6b6b; margin-top: 0.25rem; }
          .item p { font-size: 0.9rem; color: #6b6b6b; margin-top: 0.5rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="banner">
            <h1><xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <p style="margin-top: 1rem; font-size: 0.8rem;">Ini adalah RSS feed. Salin URL halaman ini ke pembaca RSS favorit Anda.</p>
          </div>
          <xsl:for-each select="/rss/channel/item">
            <div class="item">
              <a href="{link}">
                <xsl:value-of select="title"/>
              </a>
              <div class="meta"><xsl:value-of select="pubDate"/></div>
              <p><xsl:value-of select="description"/></p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
