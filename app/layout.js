import { ThemeProvider } from "@/components/Header/ThemeProvider";
import { asul, sulphur } from "./fonts";
import "./globals.css";
import connectMongo from "@/database/services/connectMongo";
import { auth } from "@/auth";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context-provider/providers/AuthProvider";

export const metadata = {
  title: "Book Nest",
  description: "A Haven for Book Lovers",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  const session = await auth(); 

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${asul.variable} ${sulphur.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider session={session}>{children}</AuthProvider>
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
