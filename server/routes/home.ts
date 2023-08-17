import { Request } from "express";

export default function Home(req: Request, res: any) {
	res.send("Hello From home!");
}
