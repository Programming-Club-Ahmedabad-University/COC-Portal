import app, { webSocketHandler } from "./app";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import http from "http";
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import express from "express";
import WebSocket from "ws";
import { normalizePort } from "./util/functions";
app.set("view engine", "ejs");
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
	next(createError(404));
});

// error handler
app.use(function (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
): any {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

var port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
// Specify the path to your .env file

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const wss = new WebSocket.Server({ server });
wss.on("connection", webSocketHandler);

/**
 * Normalize a port into a number, string, or false.
 */

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;
	console.log("Listening on " + bind);
}
