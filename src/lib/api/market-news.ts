"use server";

import {
  MarketNews,
  MarketNewsResponseSchema,
} from "../schemas/market-news-schema";

export interface ResponseType<T> {
  error: boolean;
  message?: string;
  data: T;
}

const FINHUB_API_KEY = process.env.NEXT_PUBLIC_FINHUB_API_KEY;

export async function fetchMarketNews(): Promise<
  ResponseType<MarketNews[] | null>
> {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${FINHUB_API_KEY}`
    );
    if (!response.ok) {
      console.error("[ERROR]: Response failed");
      return {
        error: true,
        message: "Failed to fetch market news",
        data: null,
      };
    }
    const data = await response.json();

    const parsedData = MarketNewsResponseSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("[ERROR]: Failed to parse market news", parsedData.error);
      return {
        error: true,
        message: "Failed to parse market news",
        data: null,
      };
    }
    console.info("[SUCCESS]: Fetched market news");
    return {
      error: false,
      data: parsedData.data,
    };
  } catch (error) {
    console.error("[ERROR]: Response failed", (error as Error).message);
    return {
      error: true,
      message: (error as Error).message,
      data: null,
    };
  }
}
