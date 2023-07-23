import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

import { Hover } from "../core";

export interface LinkHoverProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export const LinkHover = ({
  children,
  className,
  href,
  isActive = false,
  ...props
}: LinkHoverProps) => (
  <Link href={href} {...props}>
    <Hover
      className={clsx({ "text-inherit": isActive }, className)}
    >
      {children}
    </Hover>
  </Link>
);
