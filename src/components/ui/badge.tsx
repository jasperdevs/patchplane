import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "muted" | "success";
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  const tones = {
    default: "border-border bg-card text-foreground",
    muted: "border-border bg-muted text-muted-foreground",
    success: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  };

  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full border px-2.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
