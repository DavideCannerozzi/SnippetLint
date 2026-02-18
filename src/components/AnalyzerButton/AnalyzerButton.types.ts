import type axe from "axe-core";

export interface ButtonProps {
  code: string;
  setResults: (results: axe.AxeResults) => void;
}
