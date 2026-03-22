"use client";

import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

export default function HabitList() {

  const habits = useSelector((state) => state.habits.list);

  return (
    <div className="space-y-4">

      {habits.map((habit) => (

        <div key={habit._id} className="border p-4 rounded">

          <h2 className="font-bold">{habit.title}</h2>

          <p>{habit.description}</p>

          <p className="text-sm">
            🔥 Racha: {habit.streak} días
          </p>

          {<ProgressBar streak={habit.streak} />}
          
          <button
            className="bg-green-500 text-white px-3 py-1 rounded mt-2"
          >
            Done
          </button>

        </div>

      ))}

    </div>
  );
}