import type { ThemeProps } from "./Header.types";

export default function Header({ theme, setTheme }: ThemeProps) {
  const handleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between border-b-2 border-b-cyan-800 p-8 text-slate-900 dark:text-slate-100 ">
      <h1>Snippet Lint</h1>
      <nav>
        <div className="flex items-center gap-8 md:gap-24 mt-12 md:mt-0">
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
              <a href="#">Documentation</a>
            </li>
          </ul>
          <button onClick={handleTheme}>{theme ? "Light" : "Dark"}</button>
        </div>
      </nav>
    </header>
  );
}
