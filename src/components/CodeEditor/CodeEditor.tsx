import Editor from "react-simple-code-editor";
import type { CodeEditorProps } from "./CodeEditor.types";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

export default function CodeEditor({ code, setCode, theme }: CodeEditorProps) {
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
        border: theme ? "1px solid #ffffff" : "1px solid black",
        backgroundColor: theme ? "#0f172a" : "#ffffff",
        color: theme ? "#e2e8f0" : "#0f172a",
      }}
    />
  );
}
