export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between border-b-2 border-b-cyan-800 p-8">
      <h1>Snippet Lint</h1>
      <ul className="flex flex-col md:flex-row gap-8 md:gap-24 mt-12 md:mt-0">
        <li>
          <a
            href="https://github.com/DavideCannerozzi/Snippet-Lint"
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
    </header>
  );
}
