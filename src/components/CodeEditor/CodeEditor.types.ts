export interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  theme: boolean;
  handleEditorKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}
