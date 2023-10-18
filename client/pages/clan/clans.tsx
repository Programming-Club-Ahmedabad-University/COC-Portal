'use client'

import { useState, useEffect } from "react";
import { Box, Heading, Text, Center, Spinner } from "@chakra-ui/react";

interface Clans {
  _id: string;
  name: string;
  balance: number;
  admin: string;
}

const Clans = () => {
  const [clans, setClans] = useState<Clans[]>([]);
  const [loading, setLoading] = useState(true);

  const getClans = async () => {
    try {
      const resp = await fetch("/api/admin/auction/clan", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        const data = await resp.json();
        setClans(data);
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getClans();
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Clan Details
      </Heading>
      {clans && clans?.map((clan: Clans) => (
        <Box
          key={clan._id}
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          mb={4}
        >
          <Text>Name: {clan.name}</Text>
          <Text>Balance: {clan.balance}</Text>
          <Text>Admin: {clan.admin}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Clans;