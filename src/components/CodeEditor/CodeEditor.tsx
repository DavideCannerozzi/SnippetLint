import Editor from "react-simple-code-editor";
import type { CodeEditorProps } from "./CodeEditor.types";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

export default function CodeEditor({ code, setCode }: CodeEditorProps) {
  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={20}
      placeholder="<!-- Paste your HTML snippet here -->"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        minHeight: "250px",
        maxHeight: "60vh",
        border: "1px solid black",
      }}
    />
  );
}
