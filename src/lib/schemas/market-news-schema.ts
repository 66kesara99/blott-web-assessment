import z from "zod";

export const MarketNewsSchema = z
  .object({
    id: z.number(),
    image: z.union([z.literal(""), z.url()]),
    url: z.url(),
    datetime: z.number(),
    headline: z.string(),
    summary: z.string(),
  })
  .transform((data) => ({
    id: data.id,
    thumbnail: data.image,
    source: data.url,
    date: data.datetime,
    title: data.headline,
    description: data.summary,
  }));

export type MarketNews = z.infer<typeof MarketNewsSchema>;

export const MarketNewsResponseSchema = z.array(MarketNewsSchema);
