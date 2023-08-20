import { createClient } from "redis";

const client = createClient({
	password: process.env.REDIS_PASS,
	socket: {
		host: process.env.REDIS_HOST,
		port: 12440,
	},
});

client.connect();
client.on("error", function (error) {
	console.error("Failed to connect to redis! " + error);
});
client.on("connect", function () {
	console.log("connected to redis!");
});
export default client;
