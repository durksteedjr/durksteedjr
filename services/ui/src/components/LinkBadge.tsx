import { Badge } from "@durksteedjr/ui";
import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export interface LinkBadgeProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isOutlineArrowUpRight?: boolean;
}

export const LinkBadge = ({
  children,
  className,
  href,
  isOutlineArrowUpRight = false,
  ...props
}: LinkBadgeProps) => (
  <Link href={href} {...props}>
    <Badge
      className={clsx(
        "font-normal !text-gray-600 hover:text-inherit",
        {
          "flex items-center justify-between space-x-3 md:space-x-4":
            isOutlineArrowUpRight
        },
        className
      )}
      isHover
    >
      {children}
      {isOutlineArrowUpRight && <HiOutlineArrowUpRight />}
    </Badge>
  </Link>
);
