import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { RedisClientType } from "redis";
import crypto from "crypto";
import fetch from "cross-fetch";
const requiredEnvVariables = [
	"REDIS_PASS",
	"REDIS_HOST",
	"CF_SECRET",
	"CF_API_KEY",
];
export function loadEnvVariables(dirname: string): void {
	try {
		const envFilePath = path.resolve(dirname, ".env");
		const envContent = fs.readFileSync(envFilePath, "utf-8");
		const envConfig = dotenv.parse(envContent);
		for (const key in envConfig) {
			if (Object.prototype.hasOwnProperty.call(envConfig, key)) {
				process.env[key] = envConfig[key];
			}
		}
	} catch (error) {
		console.log(
			"No .env file found, using the environment variables from the system"
		);
	}

	for (let envVar of requiredEnvVariables) {
		if (!process.env[envVar]) {
			throw new Error(
				`Environment variable ${envVar} is missing in the .env file`
			);
		}
	}
}

export function normalizePort(val: string) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

export async function updateLeaderboard(
	redisClient: RedisClientType,
	contestId: number
) {
	const curr_time = Math.floor(new Date().getTime() / 1000);
	const apiKey = process.env.CF_API_KEY;
	const secret = process.env.CF_SECRET;
	if (!apiKey || !secret) {
		throw new Error("API key or secret is missing");
	}

	const signature = crypto
		.createHash("sha512")
		.update(
			`123456/contest.standings?apiKey=${apiKey}&contestId=${contestId}&time=${curr_time}#${secret}`
		)
		.digest("hex");

	const requestUrl = `https://codeforces.com/api/contest.standings?contestId=${contestId}&apiKey=${apiKey}&time=${curr_time}&apiSig=123456${signature}`;

	const resp = await fetch(requestUrl);
	const data = await resp.json();
	await redisClient.set("leaderboard", JSON.stringify(data));
}
