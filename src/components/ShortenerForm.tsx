import { useState } from "react";
import axios from "axios";
import type { ShortenResponse } from "../types";

interface Props {
  setResult: (data: ShortenResponse) => void;
}

export default function ShortenerForm({ setResult }: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!url) return;

    setLoading(true);

    try {
      const res = await axios.post<ShortenResponse>(
        "http://localhost:3000/shorten",
        { url, expiry_minutes: 1440 }
      );

      setResult(res.data);
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
      <form className="input-group">
        <input
          className="input"
          type="text"
          placeholder="Paste your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          className="button"
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          {loading ? "..." : "Shorten"}
        </button>
      </form>
  );
}