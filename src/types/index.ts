interface ExpiresAt {
    seconds: string,
    nanos: number
}

export interface ShortenResponse {
  short_code: string;
  expires_at: ExpiresAt;
}

export interface StatsResponse {
  clicks: number;
}
