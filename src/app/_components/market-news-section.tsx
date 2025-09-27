import ErrorScreen from "@/components/error-screen";
import { fetchMarketNews } from "@/lib/api/market-news";
import { robotoFont } from "@/lib/fonts";
import { MarketNews } from "@/lib/schemas/market-news-schema";
import { cn } from "@/lib/utils/tailwind-utils";
import NewsCard from "./news-card";

export default async function MarketNewsSection() {
  const response = await fetchMarketNews();

  if (response.error || !response.data) {
    return (
      <ErrorScreen
        title="Api Error"
        description={response.message ?? "Unknown error occurred"}
      />
    );
  }

  if (response.data.length === 0) {
    return (
      <ErrorScreen
        title="No News Found"
        description="We couldn't find any news "
      />
    );
  }

  // Sort news by date in descending order (most recent first)
  const marketNews = response.data.sort((a, b) => b.date - a.date);

  return (
    <div
      className={cn(
        robotoFont,
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]"
      )}
    >
      {marketNews.map((newsItem: MarketNews, index: number) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} isFirst={index === 0} />
      ))}
    </div>
  );
}
