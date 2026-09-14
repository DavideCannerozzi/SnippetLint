import type { PrimaryButtonProps } from "./PrimaryButton.types";

export default function PrimaryButton({
  onClick,
  children,
  disabled,
  buttonsRef,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${disabled ? "bg-sky-900 opacity-50 cursor-not-allowed" : "bg-sky-900"} mt-8 px-12 py-4 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-cyan-300 dark:focus-visible:ring-offset-slate-900`}
      onClick={onClick}
      disabled={disabled}
      ref={buttonsRef}
    >
      {children}
    </button>
  );
}
