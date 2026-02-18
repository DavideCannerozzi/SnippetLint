import Editor from "react-simple-code-editor";
import type { CodeEditorProps } from "./CodeEditor.types";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

export default function CodeEditor({ code, setCode }: CodeEditorProps) {
  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: "1px solid lightblue",
        }}
      />
    </div>
  );
}
