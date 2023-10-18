import type { NextApiRequest, NextApiResponse } from "next";
import { ClanCol } from "@/util/types";
import { clientPromise } from "@/util/DB";
import { getServerSession } from "next-auth/next"

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
	const db = (await clientPromise).db("coc-portal");
	const clans = db.collection<ClanCol>("Clans");
  
	const fields = await clans.find().toArray();
	return res.json(fields);
}  

async function POST(req: NextApiRequest, res: NextApiResponse ) {
    const {name,amount,admin} = req.body;
    const db = (await clientPromise).db("coc-portal");
	const clans = db.collection<ClanCol>("Clans");

    await clans.insertOne({
        name:name,
        balance:amount,
        admin:admin,
    })

    return res.status(200).json({message:"team saved"});
}