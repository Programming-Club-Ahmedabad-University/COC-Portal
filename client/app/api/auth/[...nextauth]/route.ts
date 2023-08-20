import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
if (!process.env.GOOGLE_CLIENT_ID) {
	throw Error("GOOGLE_CLIENT_ID is not available in .env");
} else if (!process.env.GOOGLE_CLIENT_SECRET) {
	throw Error("GOOGLE_CLIENT_SECRET is not available in .env");
}

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
});

export { handler as GET, handler as POST };
