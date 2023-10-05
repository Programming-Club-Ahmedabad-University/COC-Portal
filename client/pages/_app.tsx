import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import "./styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<main className="dark text-foreground bg-background">
			<SessionProvider session={session}>
				<NextUIProvider>
					<Component {...pageProps} />
				</NextUIProvider>
			</SessionProvider>
		</main>
	);
}
