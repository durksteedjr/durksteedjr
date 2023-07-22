"use client";

import { Hover } from "@durksteedjr/ui";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

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
          { "text-gray-800": href === pathname },
          className
        )}
      >
        {children}
      </Hover>
    </Link>
  );
};
