"use client";
import styles from "./Button.module.scss";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  content: string;
  isDisabled: boolean;
  onClick?: (e: any) => void;
};

export default function Button({
  type = "button",
  color,
  size,
  content,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.btn} 
        ${color === "primary" ? styles.primary : styles.secondary}
        ${
          size === "small"
            ? styles.small
            : size === "large"
            ? styles.large
            : styles.medium
        }
        `}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={content}
    >
      {content}
    </button>
  );
}
