"use client";

import { useEffect, useState } from "react";

export default function PremiumPage() {
  const [form, setForm] = useState({
    name: "",
    card: "",
    expiry: "",
    cvc: "",
    email: "",
  });

  const [paid, setPaid] = useState(false);

  // check storage on load
  useEffect(() => {
    const saved = localStorage.getItem("premium");
    if (saved === "true") {
      setPaid(true);
    }
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("premium", "true");
    setPaid(true);
  }

  if (paid) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-green-600">
          ✅ Payment complete, ads removed!
        </h1>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Go Premium</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2"
          name="name"
          placeholder="Cardholder name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="card"
          placeholder="Card number"
          value={form.card}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="expiry"
          placeholder="Expiry date"
          value={form.expiry}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="cvc"
          placeholder="CVC"
          value={form.cvc}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button className="bg-indigo-600 text-white p-2">
          Pay (fake)
        </button>
      </form>
    </div>
  );
}