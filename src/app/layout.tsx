import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../store/storeProvider";
export const metadata: Metadata = {
  title: "Personal Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
