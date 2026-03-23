export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRDmq6dWvwZA0VTXnthiZB8OFN9x9nKxAV18jFD4KiWWFF7vrtidbviwNhCw3xYIxXsO3B6Cpp04Xm5BgENWZCRF4NKmsIzAZCMRgeHGdv7kcc34OA1zXsv2LTewqbmFJBMZBnEWDJZCAYZCrS8HrPfVtep0VhS4gYIK4AWVTGkay8mh2PgoERLSWV4oDqaHer7hEPU0cFb7KxYjoqilgb7rQJicds7UZCvAfq6AkImy0FYw3xdVsDJTPZCsPaJgK56q7mod3EZA0SKF9hV3QZDZD";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}