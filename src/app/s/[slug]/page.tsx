"use server";

import { createClient, Row } from "@libsql/client/web";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";

// Next will cache fetch results by default, causing the database updates to not be received.
function noCacheFetch(
	input: string | URL | globalThis.Request,
	init?: RequestInit,
): Promise<Response> {
	return fetch(input, { ...init, next: { revalidate: 3600 } });
}

async function getUrl(slug: string) {
	"use server";

	const turso = createClient({
		url: process.env.TURSO_DATABASE_URL ?? "",
		authToken: process.env.TURSO_AUTH_TOKEN,
		fetch: noCacheFetch
	});

	const rows = (await turso.execute({ sql: "SELECT url FROM links WHERE id = ? LIMIT 1", args: [slug] })).rows;

	const url = rows[0]?.url?.toString() ?? null;

	if (url) {
		permanentRedirect(url, RedirectType.replace);
	} else {
		notFound();
	}
}

export default async function Shortener({ params }: { params: { slug: string } }) {
	const slug = params.slug;

	return <>{await getUrl(slug)}</>;
}