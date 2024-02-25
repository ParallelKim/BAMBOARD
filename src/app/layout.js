import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "BAMBOARD!",
    description: "BAM BAM BAM",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="ko"
            translate="no"
        >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
