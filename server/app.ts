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

	ws.send("something");
}
export default app;
export { webSocketHandler };
