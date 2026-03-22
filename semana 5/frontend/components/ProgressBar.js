export default function ProgressBar({ streak }) {

  const percentage = Math.min((streak / 66) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">

      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      />

    </div>
  );
}