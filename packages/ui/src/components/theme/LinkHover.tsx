"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

import { Hover } from "../core";

export interface LinkHoverProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LinkHover = ({
  children,
  className,
  href,
  ...props
}: LinkHoverProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} {...props}>
      <Hover
        className={clsx(
          { "text-inherit": href === pathname },
          className
        )}
      >
        {children}
      </Hover>
    </Link>
  );
};
