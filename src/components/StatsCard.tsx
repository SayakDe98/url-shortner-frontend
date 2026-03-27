import { useEffect, useState } from "react";
import axios from "axios";
import type { StatsResponse } from "../types";

interface Props {
  code: string;
}

export default function StatsCard({ code }: Props) {
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    axios
      .get<StatsResponse>(`http://localhost:9000/stats/${code}`)
      .then((res) => setClicks(res.data.clicks))
      .catch(() => console.error("Failed to fetch stats"));
  }, [code]);

  return (
    <div className="card">
      <p>Clicks: {clicks}</p>
    </div>
  );
}