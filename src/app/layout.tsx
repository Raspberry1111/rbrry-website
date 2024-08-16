import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "rbrry",
	description: "A little website hosting things I've made",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Topbar />
				{children}
			</body>
		</html>
	);
}
