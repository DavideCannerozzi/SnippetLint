import type { Ref } from "react";

export interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
  buttonsRef?: Ref<HTMLButtonElement>;
}
