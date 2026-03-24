export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRNorpZCcpVZAc9XZAktHBk5QF2QVLNpissLf5HvkeiQjGc9ikFZB6tw0h1qTVdqTwfMk0KsT8kvBoMJcwroHgX8p6COdDOpQoWGeNhDm7B2wKHK6jeDqcDr8RDhYzmkZAVKZAsuv1B6xHuYGLZCZBfGeRafJION3xrEcDZAi7U4WJ6ZA2f1ZBJjOvZAsdYQd3JPz1Jb2fzdT7jrounkU6xlGRy59GM2Ut9noNl670YnhZBd3TYqQxdFGZC5butnSnkRlzlpPdhXyWorAYNGJWX";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}