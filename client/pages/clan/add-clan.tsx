'use client'
import React, { useState } from "react";

const Clan = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [admin, setAdmin] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/auction/clan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          amount,
          admin,
        }),
      });

      if (response.status === 200) {
        setName("");
        setAmount("");
        setAdmin("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Enter clan name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter budget"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="clan admin registered e-mail id"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <button onClick={(e) => handleSubmit(e)}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Clan;