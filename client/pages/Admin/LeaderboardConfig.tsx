import { fetcher, myToast } from "@/util/functions";
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

async function postContest(
	contest: string,
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setIsError: React.Dispatch<React.SetStateAction<boolean>>,
	mutate: () => void
) {
	setIsLoading(true);
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
import { Button, Input } from "@nextui-org/react";
import React from "react";

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
			return <div key={contest}>{contest}</div>;
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
						onChange={(e) => setContest(e.target.value)}
					/>

					<Button
						variant="ghost"
						color="primary"
						className={styles.addBtn}
						onClick={() => {
							postContest(
								contest,
								setIsLoadingPost,
								setIsErrorPost,
								mutate
							);
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
				<div>{listOfContests}</div>
			</main>
		</RootLayout>
	);
}
