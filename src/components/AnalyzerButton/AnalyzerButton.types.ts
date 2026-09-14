import type { Ref } from "react";

export interface ButtonProps {
  code: string;

  error: Error | null;
  loading: boolean;
  handleAnalyze: () => void;
  buttonsRef?: Ref<HTMLButtonElement>;
}
