import type { PrimaryButtonProps } from "./PrimaryButton.types";

export default function PrimaryButton({
  onClick,
  children,
}: PrimaryButtonProps) {
  return (
    <button className="bg-sky-900 text-white py-4 px-12 mt-8" onClick={onClick}>
      {children}
    </button>
  );
}
