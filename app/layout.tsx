"use client";

import type React from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/contexts/theme-context";
import { GlobalStyles } from "@/styles/globals";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Vikas V P | Senior Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Vikas V P, Senior Software Engineer with 6 years of experience building enterprise-scale web applications with React, Next.js, TypeScript, Node.js, and MongoDB."
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
