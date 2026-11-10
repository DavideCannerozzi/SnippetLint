import type { ResultsProps } from "../../types";

export default function IssuesList({ results, code }: ResultsProps) {
  if (!results || code.trim().length === 0) return null;
  if (results.violations.length === 0 && results.incomplete.length === 0)
    return (
      <p className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 font-medium text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        ✓ No accessibility issues found
      </p>
    );
  return (
    <div className="mt-12 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Issues List
      </h2>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
        {results.violations.length}{" "}
        {results.violations.length === 1 ? "Issue Found" : "Issues Found"}
      </p>
      <ul className="mt-6 space-y-6">
        {results.violations.map((issue) => (
          <li
            key={issue.id}
            className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-700 dark:bg-slate-900/50"
          >
            <p className="break-words font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
              {issue.description}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {issue.help}
            </p>
            <ul className="mt-5 space-y-4">
              {issue.nodes.map((node) => (
                <li
                  key={JSON.stringify(node.target)}
                  className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
                >
                  <p className="whitespace-pre-wrap break-words border-b border-slate-200 bg-slate-100 px-4 py-3 font-mono text-sm leading-relaxed text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-cyan-200">
                    {node.html}
                  </p>
                  <p className="whitespace-pre-line break-words px-4 py-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {node.failureSummary}
                  </p>
                </li>
              ))}
            </ul>
            <a
              className="mt-4 inline-block rounded text-sm font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200 dark:focus-visible:outline-blue-300"
              href={issue.helpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="sr-only"> about {issue.help}</span>
            </a>
          </li>
        ))}
      </ul>
      {results.incomplete.length > 0 && (
        <>
          <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
            Some accessibility checks need manual review. The items below
            explain what could not be verified automatically.
          </p>
          <ul className="mt-4 space-y-4">
            {results.incomplete.map((incomplete) => (
              <li
                key={incomplete.id}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <p className="break-words font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                  {incomplete.description}
                </p>
                <a
                  className="mt-3 inline-block rounded text-sm font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:text-blue-200 dark:focus-visible:outline-blue-300"
                  href={incomplete.helpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <span className="sr-only"> about {incomplete.help}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
