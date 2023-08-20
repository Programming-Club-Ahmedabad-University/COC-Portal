import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { RedisClientType } from "redis";

const requiredEnvVariables = ["REDIS_PASS", "REDIS_HOST"];
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

export async function updateLeaderboard(redisClient: RedisClientType) {
	// fetch the json data from the codeforces api
	const data = {}; // fetched data
	await redisClient.set("leaderboard", JSON.stringify(data));
}
