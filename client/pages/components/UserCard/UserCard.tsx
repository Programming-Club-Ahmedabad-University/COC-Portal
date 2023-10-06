"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import React from "react";

function UserCard({ user }: { user: Session["user"] }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <Avatar src={user?.image ?? ""} />
          <div>
            <h4>{user?.name}</h4>
            <h5>{user?.email}</h5>
            <h5>{user.role}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>Haalo Clash of Codes Ramva!</p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default UserCard;
