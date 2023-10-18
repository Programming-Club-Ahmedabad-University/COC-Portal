import styles from "./Navbar.module.css";

import {
	Avatar,
	PopoverTrigger,
	Button,
	PopoverContent,
	Menu,
	MenuButton,
	MenuList,
} from "@chakra-ui/react";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	let authBtn;
	const navItems = [
		{
			name: "Leaderboard",
			link: "/",
		},
	];

	if (session && session.user) {
		if (session.user.role === "Admin") {
			navItems.push({
				name: "Leaderboard Config",
				link: "/Admin/LeaderboardConfig",
			});
		}
		authBtn = (
			<div className={styles.navMenu}>
				<Menu>
					<MenuButton>
						<Avatar className={styles.avatarButton} src={session.user.image!} />
					</MenuButton>
					<MenuList className={styles.menuList} minWidth="100x">
						<Button
							variant={"secondary"}
							onClick={() =>
								signOut({
									callbackUrl: "/",
								})
							}
						>
							Sign out
						</Button>
					</MenuList>
				</Menu>
			</div>
		);
	} else {
		authBtn = (
			<Button
				isLoading={loading}
				color="primary"
				variant="flat"
				onClick={async () => {
					setLoading(true);
					await signIn("google");
				}}
			>
				{loading ? "Signin In..." : "Sign in with Google"}
			</Button>
		);
	}

	return (
		<div className={styles.mainNav}>
			{/* <div className={styles.navItem}>
				{navItems.map((item) => (
					<div key={item.name}>
						<Link href={item.link}>
							<div>{item.name}</div>
						</Link>
					</div>
				))}
			</div>
			<div className={styles.mainNavSide}>
				{session && session.user && (
					<>
						<div className={styles.sideItems}>
							<div>{session.user.name}</div>
							<div>{session.user.role}</div>
						</div>
					</>
				)}
			</div> */}

			{/* top */}
			<div className={styles.navTop}>
				<Button>Home</Button>
				<Button>Standings</Button>
				<Button>Live</Button>
			</div>

			{/* mid */}
			<div className={styles.navMid}>
				<Image src="/images/logo.png" alt="logo" width={150} height={150} />
			</div>

			{/* bottom */}
			<div className={styles.navEnd}>
				{/* profile pic: */}
				<Button>Battles</Button>
				<Button>Players</Button>
				<div>{authBtn}</div>
			</div>
		</div>
	);
}
