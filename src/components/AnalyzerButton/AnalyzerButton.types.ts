export interface ButtonProps {
  code: string;

  error: Error | null;
  loading: boolean;
  handleAnalyze: () => void;
}
