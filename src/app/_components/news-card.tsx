import { MarketNews } from "@/lib/schemas/market-news-schema";
import { cn } from "@/lib/utils/tailwind-utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  newsItem: MarketNews;
  isFirst: boolean;
}

export default function NewsCard({ newsItem, isFirst }: Props) {
  return (
    <Link
      href={newsItem.source}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        isFirst && "col-span-1 md:col-span-2",
        "group hover:scale-105 transition-transform duration-300"
      )}
    >
      {isFirst ? (
        <FirstCard newsItem={newsItem} />
      ) : (
        <div className="flex flex-col gap-[16px]">
          <Image
            src={
              !!newsItem.thumbnail
                ? newsItem.thumbnail
                : "/images/placeholder.png"
            }
            className="w-full h-auto rounded-[6px]"
            width={400}
            height={200}
            alt="thumbnail"
          />
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[24px]/[130%] capitalize tracking-[-0.04em]] font-normal font-regular">
              {newsItem.title}
            </h2>

            <div className="text-sm max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
              {newsItem.description}
            </div>

            <ReadArticle />
          </div>
        </div>
      )}
    </Link>
  );
}

const ReadArticle = () => {
  return (
    <div className="flex items-baseline gap-[4px]">
      <span className="border-b pb-[7px] text-[15px]/[100%] font-regular font-normal">
        Read Article
      </span>
      <Image
        src="/images/external-link-icon.png"
        className="w-[24px] h-auto"
        width={24}
        height={24}
        alt="external link icon"
      />
    </div>
  );
};

const FirstCard = ({ newsItem }: { newsItem: MarketNews }) => {
  return (
    <>
      {/* Mobile first card */}
      <div className="flex flex-col md:hidden">
        <Image
          src={
            !!newsItem.thumbnail
              ? newsItem.thumbnail
              : "/images/placeholder.png"
          }
          className="w-full h-auto rounded-[6px]"
          width={400}
          height={200}
          alt="thumbnail"
          priority
        />

        <div className="p-[20px] bg-linear-to-r from-[#510049] to-[#5100491A] flex flex-col gap-[16px] backdrop-blur-[10px]">
          <h2 className="text-[24px]/[130%] capitalize tracking-[-0.04em] font-bold font-regular">
            {newsItem.title}
          </h2>

          <ReadArticle />
        </div>
      </div>

      {/* Desktop first card */}
      <div className="hidden md:flex flex-col relative rounded-[6px] overflow-hidden">
        <Image
          src={
            !!newsItem.thumbnail
              ? newsItem.thumbnail
              : "/images/placeholder.png"
          }
          className="w-full h-[540px] object-cover"
          width={500}
          height={500}
          alt="thumbnail"
          priority
        />
        <div className="absolute bottom-0 p-[20px] bg-linear-to-r from-[#510049] to-[#5100491A] flex flex-col gap-[8px] backdrop-blur-[10px]">
          <h2 className="text-[26px]/[130%] capitalize tracking-[-0.04em] font-bold font-regular">
            {newsItem.title}
          </h2>

          <div className="text-sm max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40">
            {newsItem.description}
          </div>

          <ReadArticle />
        </div>
      </div>
    </>
  );
};
