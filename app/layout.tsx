import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TokenProvider } from "@/components/TokenProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Clash Bytes",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={'min-h-screen flex flex-col ${inter.className}'}>
                <TokenProvider>
                    <Header className={"fixed top-0 left-0 w-full z-50 "}/>
                    <main className="flex flex-grow overflow-y-auto">
                        {children}
                    </main>
                    <Footer className={"fixed bottom-0 left-0 w-full z-50 "}/>
                </TokenProvider>
            </body>
        </html>
    );
}
