import type { NextApiRequest, NextApiResponse } from "next";
import redisClient from "@/util/redis";
type ResponseData = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		return GET(req, res);
	} else if (req.method === "POST") {
		return POST(req, res);
	} else {
		return res.status(400).send(`Method ${req.method} is not supported!`);
	}
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
	const contests = await redisClient.lRange("Contests", 0, -1);

	return res.json({ contests });
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { contest } = req.body;
	await redisClient.lPush("Contests", contest);

	return res.send("success");
}
