import Skeleton from "@/components/skeleton";
import { cn } from "@/lib/utils/tailwind-utils";

interface Props {
  isFirst: boolean;
}

export default function NewsCardSkeleton({ isFirst }: Props) {
  return (
    <div className={cn(isFirst && "col-span-1 md:col-span-2", "w-full")}>
      {isFirst ? (
        <>
          {/* Mobile first card */}
          <div className="flex flex-col gap-[16px] md:hidden">
            <Skeleton className="w-full h-[150px] rounded-[6px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-[30px]" />
              <Skeleton className="w-full h-[30px]" />
              <Skeleton className="w-full h-[30px]" />
            </div>

            <Skeleton className="w-[25%] h-[20px]" />
          </div>
          {/* Desktop first card */}
          <div className="hidden md:flex flex-col relative rounded-[6px] overflow-hidden">
            <Skeleton className="w-full h-[540px] rounded-[6px]" />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-[16px]">
          <Skeleton className="w-full h-[150px] rounded-[6px]" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-[30px]" />
            <Skeleton className="w-full h-[30px]" />
            <Skeleton className="w-full h-[30px]" />
          </div>
          <Skeleton className="w-[25%] h-[20px]" />
        </div>
      )}
    </div>
  );
}
