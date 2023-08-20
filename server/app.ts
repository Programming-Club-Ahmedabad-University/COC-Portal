import express from "express";
import { Request, Response } from "express";
import WebSocket from "ws";
var app = express();

// view engine setup

app.use("/", function (req: Request, res: Response, next) {
	return res.send("Hey zip!");
});

function webSocketHandler(ws: WebSocket) {
	ws.on("message", function (message: string) {
		console.log("received: %s", message);
	});
	let i = 0;
	let interval = setInterval(() => {
		ws.send(i);
		i++;
	}, 1000);

	ws.send("something");
	ws.on("close", function () {
		console.log("closing connection");
		clearInterval(interval);
	});
}
export default app;
export { webSocketHandler };
