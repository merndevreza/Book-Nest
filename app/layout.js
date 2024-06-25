import { asul, sulphur } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Book Nest",
  description: "A Haven for Book Lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${asul.variable} ${sulphur.variable}`}>
      <body>{children}</body>
    </html>
  );
}
