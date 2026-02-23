import type { PrimaryButtonProps } from "./PrimaryButton.types";

export default function PrimaryButton({
  onClick,
  children,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${disabled ? "bg-sky-900 opacity-50 cursor-not-allowed" : "bg-sky-900"} text-white py-4 px-12 mt-8`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
