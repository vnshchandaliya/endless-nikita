export default function Graph() {
  const bars = [40, 60, 50, 80, 70, 90, 75];

  return (
    <div className="flex items-end gap-2 h-44 w-full mt-4">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded 
          bg-gradient-to-t from-blue-500 via-green-400 via-yellow-400 to-orange-400"
          style={{
            height: `${h}%`,
            animation: `grow 1.5s ease-in-out ${i * 0.1}s forwards`,
          }}
        ></div>
      ))}
    </div>
  );
}