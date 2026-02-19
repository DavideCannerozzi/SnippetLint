import type { ScoreDisplayProps } from "../ScoreDisplay/ScoreDisplay.types";

export default function IssuesList({ results }: ScoreDisplayProps) {
  if (!results) return null;
  if (results.violations.length === 0) return <p>No issues found.</p>;
  return (
    <div>
      <h2>Issues List</h2>
      <ul>
        {results.violations.map((issue) => (
          <li key={issue.id}>
            <p>{issue.description}</p>
            <p>{issue.help}</p>
            <a href={issue.helpUrl} target="_blank" rel="noopener noreferrer">
              {issue.helpUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
