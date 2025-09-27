import NewsCardSkeleton from "./news-card-skeleton";

export default function MarketNewsSkeleton() {
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] w-full"
      }
    >
      {Array.from(Array(10).keys()).map((index: number) => (
        <NewsCardSkeleton key={index} isFirst={index === 0} />
      ))}
    </div>
  );
}
