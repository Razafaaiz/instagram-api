export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRDyEuzgNaLiZBIUgPt7g3lCzu8B1VjoGeVrx69lcJrNZC637EZAeBFK0RQm6GaOvZAhdAZBz6ZCPIaTN38qOkHU338Ig7xH2wi4jYGXe5VlYOItYcUp53wNsJvHYYDHq0YgltIo64WCMsZCteNUsCEQrG5Wjfatw5KOQ2cqyrwklZBuWq1lsfrAocsDrZC7vVv5eIq6mylvwZAAYezFGLT4BYFO4ip6UtmRkTjaqlipQRvgfxsvnJPgmFG2cFZAftleR1vRPTEjU2erKZCTz";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}