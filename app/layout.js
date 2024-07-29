import { ThemeProvider } from "@/components/Header/ThemeProvider";
import { asul, sulphur } from "./fonts";
import "./globals.css";
import connectMongo from "@/database/services/connectMongo";

export const metadata = {
  title: "Book Nest",
  description: "A Haven for Book Lovers",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${asul.variable} ${sulphur.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
