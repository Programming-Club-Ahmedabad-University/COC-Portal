import { ObjectId } from "mongodb";

export type UserCol = {
	name: string;
	email: string;

	role: "Admin" | "Leader" | "Co-leader" | "Elder" | "Member" | null;
	_id?: ObjectId;
};
