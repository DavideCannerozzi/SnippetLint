import type { ScoreDisplayProps } from "../ScoreDisplay/ScoreDisplay.types";

export default function IssuesList({ results }: ScoreDisplayProps) {
  if (!results) return null;
  if (results.violations.length === 0) return <p>No issues found.</p>;
  return (
    <div className="mt-12 bg-gray-100 border border-black-500 p-8">
      <h2 className="font-bold">Issues List</h2>
      <ul>
        {results.violations.map((issue) => (
          <li key={issue.id} className="mt-6 leading-relaxed">
            <p>{issue.description}</p>
            <p>{issue.help}</p>
            <a
              className="text-blue-600"
              href={issue.helpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {issue.helpUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
