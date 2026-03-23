export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRPNx1iCMBqHL1X8NdbTaq0ko1fAL8wHjMpD2X1L6eHu2U5lyT02ZAAyPzaDyBwXpWL0nXv9yX4pNvjdo49mgqTJKcxkrL0l8RiU5SYBC1QrnQgcdndfEhnUZCbjhnLhoBhXJFceZCLndROgOIZAWWxXlLG4J5EmMJtcIgfw8dasb5s7O0RpEMTjZCxZBDyDaeSkMPo610hz15kVtHWlkiu58UBKiWRWoQWQDTier4uk1Rd8MSrzzwZCYR284u0YmqRKZAmXMM6iTeU22";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}