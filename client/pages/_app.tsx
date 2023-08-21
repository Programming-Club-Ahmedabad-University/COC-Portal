import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </SessionProvider>
  );
}
