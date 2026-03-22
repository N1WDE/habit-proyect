"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHabits } from "../store/habitSlice";
import HabitList from "../components/HabitList";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  return (
    <main className="p-8 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Habit Tracker
      </h1>

      <ProgressBar />

      <div className="mt-6">
        <HabitList />
      </div>

    </main>
  );
}