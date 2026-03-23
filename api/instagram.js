export default async function handler(req, res) {
  const ACCESS_TOKEN = "EAAZA5BhlcMKsBRLq0wmOfcXrK6Hd0yesRFhq5AgLJ72JugN3EZBZCBWaSz4mjXGwQMGh0w1UQOpIAAsofJ6Hatf0AVh8MckawswfrIpltKCYr6NyVzV2vbnQcbfCC3cz9jgIr23BLxXtKYhS4vP4bngNkPMgeJ1XbtaaKfb4moUIZBL3xhvgnfQJsbrHlbZAIUwf3uizq4JPdBvV7ZCCxvy8mivBYIDwwEFaJ69elu57WwYIgCR9SJoSD1Lo7ZAF6v1QI0dDE6ZBxZA2TmnoTerFN4eJx";
  const IG_USER_ID = "17841441280435160";

  const url = `https://graph.facebook.com/v18.0/${IG_USER_ID}/media?fields=id,caption,media_type,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}