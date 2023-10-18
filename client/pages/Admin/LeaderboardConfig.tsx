import { fetcher, myToast } from "@/util/functions";
import { DeleteIcon } from "@chakra-ui/icons";
import RootLayout from "../Layout";
import styles from "./LeaderboardConfig.module.css";
import useSWR from "swr";

function useContests() {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/admin/contestConfig`,
    fetcher
  );

  return {
    contests: data,
    isLoading,
    isError: error,
    mutate,
  };
}

function verfiyContest(contest: string) {
  return contest.length > 0;
}

async function postContest(
  contest: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  mutate: () => void
) {
  setIsLoading(true);

  if (!verfiyContest(contest)) {
    setIsLoading(false);
    setIsError(true);
    return;
  }

  const res = await fetch(`/api/admin/contestConfig`, {
    method: "POST",
    body: JSON.stringify({ contest }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setIsLoading(false);
  mutate();
  if (!res.ok) {
    setIsError(true);
  }
}

import toast, { Toaster } from "react-hot-toast";
import { Box, Button, IconButton, Input } from "@chakra-ui/react";
import React from "react";

function listComp({ contest }: { contest: string }) {
  return (
    <div className={styles.listItem}>
      <div>{contest}</div>
      <IconButton
        className={styles.deleteBtn}
        variant="outline"
        colorScheme="red"
        aria-label="Delete Contest"
        icon={<DeleteIcon />}
        // onClick={}
      />
    </div>
  );
}

export default function LeaderboardConfig() {
  const { contests, isLoading, isError, mutate } = useContests();
  const [contest, setContest] = React.useState("");
  const [isLoadingPost, setIsLoadingPost] = React.useState(false);
  const [isErrorPost, setIsErrorPost] = React.useState(false);

  let listOfContests;

  if (isLoading) {
    listOfContests = <div>Loading...</div>;
  } else if (isError) {
    listOfContests = <div>Error...</div>;
  } else {
    console.log(contests);
    listOfContests = contests.contests.map((contest: string) => {
      return listComp({ contest });
    });
  }

  return (
    <RootLayout>
      <main className={styles.main}>
        <h1>Contests on Leaderboard</h1>
        <div className={styles.addWrapper}>
          <Input
            placeholder="Enter contest number"
            className={styles.addInput}
            value={contest}
            onChange={(e: any) => setContest(e.target.value)}
          />

          <Button
            variant={"primary"}
            className={styles.addBtn}
            onClick={() => {
              postContest(contest, setIsLoadingPost, setIsErrorPost, mutate);
              if (isErrorPost) {
                myToast("Error", "error");
              } else if (isLoadingPost) {
                myToast("Loading...");
              } else {
                myToast("Contest added", "success");
              }
            }}
          >
            +
          </Button>
        </div>

        <Toaster position="bottom-right" reverseOrder={false} />
        <div className={styles.listConent}>{listOfContests}</div>
      </main>
    </RootLayout>
  );
}
