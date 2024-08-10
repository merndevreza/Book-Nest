import { ThemeProvider } from "@/components/Header/ThemeProvider";
import { asul, sulphur } from "./fonts";
import "./globals.css";
import connectMongo from "@/database/services/connectMongo";
import { auth } from "@/auth";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Book Nest",
  description: "A Haven for Book Lovers",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  const session = await auth();
  console.log(session);

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        </ThemeProvider>
      </body>
    </html>
  );
}
