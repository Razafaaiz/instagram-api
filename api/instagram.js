export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBREycQbub98WgYuioLZC4muOM2ZCZBpEbkZAF6WROpxhAQlzJtjT8QEGurnDu3eXdTOXx6aROV0NP9weOzZCNTN2gwZBZBo2cZCAgEZAyvUurjvJhWKP6eXPiy8dCQuoMRSPEM22rTMy2sIbLHW0IHTIUahZAqL6iU4fpJKZBNKshfJ1IDqGeUZB8lz053Tz81NXVNr4NkHSShC2sLZCZA95H2FxLCVNZBgVQVzSZCzeZBC5r3SfY3SrWmVQHhiZAgWdZA1LzLx2MzZAdtAihC0vTMRic";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}