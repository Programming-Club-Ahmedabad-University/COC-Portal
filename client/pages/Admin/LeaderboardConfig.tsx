import { fetcher, myToast } from "@/util/functions";
import RootLayout from "../Layout";
import styles from "./LeaderboardConfig.module.css";
import useSWR from "swr";
function useContests() {
	const { data, error, isLoading } = useSWR(
		`/api/admin/contestConfig`,
		fetcher
	);

	return {
		contests: data,
		isLoading,
		isError: error,
	};
}

import toast, { Toaster } from "react-hot-toast";
import { Button, Input } from "@nextui-org/react";

export default function LeaderboardConfig() {
	const { contests, isLoading, isError } = useContests();
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
					/>

					<Button
						variant="ghost"
						color="primary"
						className={styles.addBtn}
						onClick={() => myToast("Task failed successfully")}
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
