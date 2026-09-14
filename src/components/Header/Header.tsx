import type { ThemeProps } from "./Header.types";

export default function Header({ theme, handleTheme }: ThemeProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between border-b-2 border-b-cyan-800 p-8 text-slate-900 dark:text-slate-100 ">
      <h1>Snippet Lint</h1>
      <div className="mt-12 flex flex-col items-start gap-8 md:mt-0 md:flex-row md:items-center md:gap-24">
        <nav>
          <ul className="flex flex-col md:flex-row gap-8 md:gap-24 m-0 p-0 list-none">
            <li>
              <a
                href="https://github.com/DavideCannerozzi/SnippetLint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DavideCannerozzi/SnippetLint/blob/master/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={handleTheme}>{theme ? "Light" : "Dark"}</button>
      </div>
    </header>
  );
}
