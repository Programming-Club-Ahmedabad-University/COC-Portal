import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!");
});
app.use((err: Error, req: Request, res: Response, next: any): any => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});
// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
