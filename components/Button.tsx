import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Props = {
  variant?: "primary" | "secondary" | "blush" | "outline-light";
  size?: "sm" | "md" | "lg";
  href: string;
  target?: "_blank";
  icon?: IconName;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  icon,
  iconPosition = "end",
  fullWidth,
  className,
  children,
}: Props) {
  const cls = [
    "baca-btn",
    `baca-btn--${variant}`,
    size !== "md" && `baca-btn--${size}`,
    fullWidth && "baca-btn--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const ic = icon ? <Icon name={icon} /> : null;
  return (
    <a className={cls} href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      {iconPosition === "start" && ic}
      <span>{children}</span>
      {iconPosition === "end" && ic}
    </a>
  );
}
