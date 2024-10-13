"use client";
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { useEffect } from "react";

export default function DiscordActivity() {
	const discordSdk = new DiscordSDK(process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "");
	discordSdk.ready().then(() => console.log("Ready"));


	return <h1>Test</h1>;
}