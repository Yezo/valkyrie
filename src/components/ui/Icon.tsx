import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  children: React.ReactNode;
};

export const Icon = ({ className, children }: IconProps) => {
  return <div className={cn("", className)}>{children}</div>;
};
