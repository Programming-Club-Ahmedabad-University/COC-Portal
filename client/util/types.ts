import { ObjectId } from "mongodb";

export type UserCol = {
	name: string;
	email: string;
	rank?:number;
	clan?:string;
	soldPrice?:number
	qualifOne?:number;
	qualifTwo?:number;
	role: "Admin" | "Leader" | "Co-leader" | "Elder" | "Member" | null;
	_id?: ObjectId;
};

export type ClanCol = {
	name:string;
	balance:string;
	members?:ObjectId[];
	matchScores?:{[matchName:string]: number};
	admin:string;
	adminId?:string | ObjectId;
	_id?:ObjectId;
}