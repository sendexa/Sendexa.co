export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
      <code className="text-sm text-gray-200">
        {code}
      </code>
    </pre>
  );
}