import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "The Journey",
	description:
		"Discover the insightful and relatable tales of Maharshi Vashistha's college life, as he takes you on a journey filled with friendships, academics, and memorable moments, offering valuable advice along the way.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					name="msapplication-TileColor"
					content="#da532c"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider>
					<div className="container">
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
