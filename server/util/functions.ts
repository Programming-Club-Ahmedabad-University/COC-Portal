import fs from "fs";
import dotenv from "dotenv";

const requiredEnvVariables = ["REDIS_PASS", "REDIS_HOST"];
export function loadEnvVariables(envFilePath: string): void {
	const envContent = fs.readFileSync(envFilePath, "utf-8");
	const envConfig = dotenv.parse(envContent);
	for (const key in envConfig) {
		if (Object.prototype.hasOwnProperty.call(envConfig, key)) {
			process.env[key] = envConfig[key];
		}
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
