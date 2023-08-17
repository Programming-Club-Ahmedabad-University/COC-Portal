import express, { Request, Response } from "express";
import Home from "./routes/home";
const app = express();
const port = process.env.PORT || 3000;

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!");
});
app.get("/home", Home);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
