import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineArrowUpRight
} from "react-icons/hi2";

import { Card } from "../core";

export interface LinkCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isOutlineArrowUpRight?: boolean;
  isOutlineArrowRight?: boolean;
}

export const LinkCard = ({
  children,
  className,
  href,
  isOutlineArrowUpRight = false,
  isOutlineArrowRight = false,
  ...props
}: LinkCardProps) => (
  <Link href={href} {...props}>
    <Card
      className={clsx(
        {
          "group relative":
            isOutlineArrowUpRight || isOutlineArrowRight
        },
        className
      )}
      isHover
    >
      {children}
      {isOutlineArrowUpRight && (
        <HiOutlineArrowUpRight className="absolute right-6 top-[1.375rem]" />
      )}
      {isOutlineArrowRight && (
        <HiOutlineArrowRight className="absolute right-6 top-[1.375rem] hidden group-hover:inline-block" />
      )}
    </Card>
  </Link>
);
