import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import "./styles/globals.css";

import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <main className="dark text-foreground bg-background">
      <SessionProvider session={session}>
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </main>
  );
}
