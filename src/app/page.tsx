import { albraFont, helveticaFont } from "@/lib/fonts";
import { cn } from "@/lib/utils/tailwind-utils";
import Image from "next/image";
import { Suspense } from "react";
import MarketNewsSection from "./_components/market-news-section";
import MarketNewsSkeleton from "./_components/market-news-skeleton";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default function Home() {
  return (
    <div className="flex flex-col items-center my-[44px] text-white gap-[58px] md:gap-[75px]">
      <div>
        <Image
          src="/images/logo.png"
          className="w-[200px] h-auto mb-2"
          width={400}
          height={200}
          alt="logo"
        />
      </div>
      <div
        className={cn(
          helveticaFont,
          "text-[40px]/[88%] md:text-[80px] md:mt-[21px] text-left self-start font-regular uppercase tracking-[-0.01em] flex flex-col gap-1"
        )}
      >
        <h1>LATEST NEWS</h1>
        <h1 className="flex items-baseline gap-x-2 md:gap-x-4 flex-wrap">
          <span className={cn(albraFont, "tracking-[-0.06em]")}>FROM</span>
          <div
            aria-hidden="true"
            className="hidden lg:flex w-[193px] border-t self-center border-gray-300"
          ></div>
          <span>THE</span>
          <div className="flex items-baseline gap-2">
            <span>WORLD</span>
            <span className="inline-flex self-start">
              <Image
                src="/images/bitcoin-icon.png"
                className="w-[22px] md:w-[28px] h-auto"
                width={30}
                height={30}
                alt="title end icon"
              />
            </span>
          </div>
        </h1>
      </div>

      <Suspense fallback={<MarketNewsSkeleton />}>
        <MarketNewsSection />
      </Suspense>
    </div>
  );
}
