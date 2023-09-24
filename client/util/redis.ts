import { createClient } from "redis";

const redisClient = createClient({
	password: process.env.REDIS_PASS,
	socket: {
		host: process.env.REDIS_HOST,
		port: 12440,
	},
});

redisClient.connect();
redisClient.on("error", function (error) {
	console.error("Failed to connect to redis! " + error);
});
redisClient.on("connect", function () {
	console.log("connected to redis!");
});
// disconnect from redis when the process is terminated
process.on("SIGINT", function () {
	console.log("disconnecting from redis");
	redisClient.quit();
});
export default redisClient;
