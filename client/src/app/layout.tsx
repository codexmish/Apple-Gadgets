import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "./utils/toast";



export const metadata: Metadata = {
  title: "Apple Gadgets",
  description: "Clone of Apple Gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastContainer/>
        </body>
    </html>
  );
}
