import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={kumbhSans.className}>
			<body>{children}</body>
		</html>
	);
}
