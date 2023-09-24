"use client";
import { useEffect, useState } from "react";

export default function Test() {
  // const ws = new WebSocket("ws://localhost:3001");
  const [data, setData] = useState(null);
  // useEffect(() => {
  // 	ws.onmessage = (e) => {
  // 		// a message was received

  // 		setData(e.data);
  // 	};
  // 	return () => {
  // 		ws.close();
  // 	};
  // }, []);

  return <div>{data}</div>;
}
