import { describe, expect, it, vi } from "vitest";
import { fetchMarketNews } from "../market-news";

const mockResponse = [
  {
    category: "general",
    datetime: 1596589501,
    headline:
      "Square surges after reporting 64% jump in revenue, more customers using Cash App",
    id: 5085164,
    image:
      "https://image.cnbcfm.com/api/v1/image/105569283-1542050972462rts25mct.jpg?v=1542051069",
    related: "",
    source: "CNBC",
    summary:
      "Shares of Square soared on Tuesday evening after posting better-than-expected quarterly results and strong growth in its consumer payments app.",
    url: "https://www.cnbc.com/2020/08/04/square-sq-earnings-q2-2020.html",
  },
];

describe("fetchMarketNews tests", () => {
  it("returns data on successful fetch and parse", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    } as Response);
    const result = await fetchMarketNews();
    expect(result.error).toBe(false);
    expect(result.data).toBeDefined();
    expect(Array.isArray(result.data)).toBe(true);
  });

  it("returns error if fetch fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
    } as Response);
    const result = await fetchMarketNews();
    expect(result.error).toBe(true);
    expect(result.data).toBeNull();
    expect(result.message).toBe("Failed to fetch market news");
  });

  it("returns error if parsing fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ invalid: "data" }),
    } as Response);
    const result = await fetchMarketNews();
    expect(result.error).toBe(true);
    expect(result.data).toBeNull();
    expect(result.message).toBe("Failed to parse market news");
  });

  it("returns error if fetch throws", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(
      new Error("Network error")
    );
    const result = await fetchMarketNews();
    expect(result.error).toBe(true);
    expect(result.data).toBeNull();
    expect(result.message).toBe("Network error");
  });
});
