import React, { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

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
    <Box display="flex" justifyContent="center" flexDirection="column" gap={3}>
      <FormControl>
        <FormLabel>Enter clan name:</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter clan name..."
        />
      </FormControl>

      <FormControl>
        <FormLabel>Enter budget:</FormLabel>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter budget"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Clan admin registered e-mail id:</FormLabel>
        <Input
          type="text"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
          placeholder="Clan admin registered e-mail id"
        />
      </FormControl>

      <Button onClick={(e) => handleSubmit(e)} colorScheme="teal">Add</Button>
    </Box>
  );
};

export default Clan;