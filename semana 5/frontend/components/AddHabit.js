"use client";

import { useState } from "react";

export default function AddHabit() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {

    const token = localStorage.getItem("token");

    await fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({ title, description })
    });

    alert("Hábito creado");
  };

  return (
    <div>

      <input
        placeholder="Título"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAdd}>
        Crear hábito
      </button>

    </div>
  );
}