import { Badge } from "@durksteedjr/ui";
import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export interface BadgeLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const BadgeLink = ({
  children,
  className,
  href,
  ...props
}: BadgeLinkProps) => (
  <Link href={href} {...props}>
    <Badge
      className={clsx(
        "flex items-center justify-between space-x-3 font-normal !text-gray-600 md:space-x-4",
        className
      )}
      isHover
    >
      {children}
      <HiOutlineArrowUpRight />
    </Badge>
  </Link>
);
