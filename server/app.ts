import { loadEnvVariables } from "./util/functions";
import { updateLeaderboard } from "./util/functions";

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
	ws.on("message", function (message: string) {
		console.log("received: %s", message);
	});
	let i = 0;
	let interval = setInterval(() => {
		ws.send(i);
		i += 10;
	}, 10000);

	ws.send("something");
	ws.on("close", function () {
		console.log("closing connection");
		clearInterval(interval);
	});
}

setInterval(() => updateLeaderboard(redisClient as any, 468732));

export default app;
export { webSocketHandler };