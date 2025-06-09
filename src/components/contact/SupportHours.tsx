export default function SupportHours() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Support Hours</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
          <span className="font-medium">24/7</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Weekends</span>
          <span className="font-medium">24/7</span>
        </div>
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Enterprise customers receive dedicated support with 15-minute response SLA.
          </p>
        </div>
      </div>
    </div>
  );
}