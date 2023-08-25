"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { DefaultSession } from "next-auth";
import React from "react";

function UserCard({ user }: { user: DefaultSession["user"] }) {
  return (
    <div>
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              className="w-20 h-20 text-large"
              src={user?.image ?? ""}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {user?.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {user?.email}
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p className="flex justify-center mt-1">
            Haalo Clash of Codes Ramva!
          </p>
        </CardBody>
        <CardFooter className="gap-3"></CardFooter>
      </Card>
    </div>
  );
}

export default UserCard;
