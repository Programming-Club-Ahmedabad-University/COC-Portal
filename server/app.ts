import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

var app = express();

// view engine setup

app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", function (req: Request, res: Response, next) {
	return res.send("Hello World");
});

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

module.exports = app;
