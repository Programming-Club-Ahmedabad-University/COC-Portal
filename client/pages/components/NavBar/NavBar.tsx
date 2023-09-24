import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
export default function NavBar() {
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);
	let authBtn;
	if (session && session.user) {
		authBtn = (
			<>
				<Button color="primary" onClick={() => signOut()}>
					Sign out
				</Button>
			</>
		);
	} else {
		authBtn = (
			<Button
				isLoading={loading}
				color="primary"
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
				<NavbarItem>
					<Link color="foreground" href="#">
						Leaderboards
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>{authBtn}</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
