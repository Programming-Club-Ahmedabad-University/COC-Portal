import express from "express";
import { Request, Response } from "express";

var app = express();

// view engine setup

app.use("/", function (req: Request, res: Response, next) {
	return res.send("Hey There!");
});

export default app;
