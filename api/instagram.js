export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRPoJa3atqX4ZAoskRAjn600RqbVWEpckeSaNBcXMIruJvhSXRWi3PXXuFrwIJyT63lEYNuJtijUSD9af7MMfiGGy7JSFADHFOzHfhVUn3XdReBK8JbufsZBgqdsdSjHTtadZAywsKrZCrdnw6XZA0LGNZBTY98oG3ZBgYxTAMyHOHRCZC64ZCFHO5nQ1zHFW4RCy1PySn9OwWoCCT8Vlif0kuVdtWFkvkFJUyYv3SzTnO5Bzg8ErHG6NKNgwrVNwtsWQzu3gPlQU2gHZBE";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}