import type { ShortenResponse } from "../types";

interface Props {
  result: ShortenResponse;
}

export default function ResultCard({ result }: Props) {
  const shortUrl = `http://localhost:3000/${result.short_code}`;

  const copy = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="result-card">
      <div className="result-row">
        <span className="short-link">{shortUrl}</span>

        <button className="copy-btn" onClick={copy}>
          Copy
        </button>
      </div>

      <p className="expiry">
        Expires: {new Date(parseInt(result.expires_at.seconds) * 1000).toLocaleString()}
      </p>
    </div>
  );
}