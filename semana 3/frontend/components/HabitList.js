"use client";

import { useSelector } from "react-redux";

export default function HabitList() {
  const habits = useSelector((state) => state.habits.list);

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <div
          key={habit._id}
          className="p-4 border rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h2 className="font-bold">{habit.title}</h2>
            <p className="text-sm text-gray-600">{habit.description}</p>
          </div>

          <button className="bg-green-500 text-white px-3 py-1 rounded">
            Done
          </button>
        </div>
      ))}
    </div>
  );
}