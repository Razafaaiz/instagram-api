export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRD1TKNVG4LXn5ZBF3YNh2BfFNGXNTxwmNcskSItpNZAnv7M3TeGxshyiCQm7Be2kzH0aIUxEGVyVkiToZBmdia1O5DcaKtlcUfJxMX2ixTPVNRShor7pGMLZCwv6bq3v15ePKvdgiwYfUuOfYgUe6F9ElztusBHMkoCjZBAcSZAA1POMad5YEwA0s8sWOF8cXFclhLaeSGdg3bvpSUeD0fVayGPyq3u2eucmL6RZCAuai3FCYRO8vxXWuvWp0ODEOvAyElCkcG7hV7HmFUQ";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}