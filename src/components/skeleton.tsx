import { cn } from "@/lib/utils/tailwind-utils";

export default function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-slate-300 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
