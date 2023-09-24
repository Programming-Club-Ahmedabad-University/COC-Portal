import {
	Avatar,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
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
			<>
				<Dropdown className="dark text-foreground ">
					<DropdownTrigger>
						<Avatar src={session.user.image!} />
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions">
						<DropdownItem
							key="new"
							color="danger"
							onClick={() => signOut()}
						>
							Sign out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</>
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
		<Navbar>
			<NavbarBrand>
				<p className="font-bold text-inherit">COC </p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{navItems.map((item) => (
					<NavbarItem key={item.name}>
						<Link href={item.link}>
							<div
								className={
									item.link != router.pathname
										? "text-foreground"
										: "text-primary"
								}
							>
								{item.name}
							</div>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				{session && session.user && (
					<>
						<div>
							{session.user.name}
							<small>{session.user.role}</small>
						</div>
					</>
				)}
				<NavbarItem>{authBtn}</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
