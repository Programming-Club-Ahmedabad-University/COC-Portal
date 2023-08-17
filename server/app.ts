import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;
console.log(port);
// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!");
});
app.use((err: Error, req: Request, res: Response, next: any): any => {
	res.status(500).send(err.stack);
});
// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
