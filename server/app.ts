import { loadEnvVariables, updateLeaderboard } from "./util/functions";
loadEnvVariables(__dirname);
// keep the above imports always at the top they are used to load the environment variables

import express from "express";
import { Request, Response } from "express";
import WebSocket from "ws";
import redisClient from "./util/redis";

var app = express();
app.use("/", async function (req: Request, res: Response, next) {
	const count = await redisClient.incr("count");

	return res.send(count.toString());
});

function webSocketHandler(ws: WebSocket) {
	let interval = setInterval(async () => {
		const leaderboard = await redisClient.get("leaderboard");
		if (!leaderboard)
			return ws.send(
				JSON.stringify({
					leaderboard: [],
				})
			);

		ws.send(leaderboard);
	}, 1000);

	ws.send("something");
	ws.on("close", function () {
		console.log("closing connection");
		clearInterval(interval);
	});
}
setInterval(() => updateLeaderboard(redisClient as any, 468732), 10000);
export default app;

export { webSocketHandler };
