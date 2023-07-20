"use client";

import { Hover } from "@durksteedjr/ui";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export interface LinkHoverProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isOutlineArrow?: boolean;
}

export const LinkHover = ({
  children,
  className,
  href,
  isOutlineArrow = false,
  ...props
}: LinkHoverProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} {...props}>
      <Hover
        className={clsx(
          { "text-gray-800": href === pathname },
          className
        )}
      >
        {children}
        {isOutlineArrow && (
          <HiOutlineArrowUpRight className="ml-2 inline-block" />
        )}
      </Hover>
    </Link>
  );
};
