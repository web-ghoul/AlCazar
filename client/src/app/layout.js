"use client";
import Header from "@/components/Header/Header";
import "../../public/styles/webGhoul.scss";
import "../../public/styles/variable.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Footer from "@/components/Footer/Footer";
// export const metadata = {
//   title: "AlCazar",
//   description: "Web Application for sell Class A furniture",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="../../public/fonts/cairo.css" />
        <link rel="stylesheet" href="../../public/fonts/ubuntu.css" />
      </head>
      <body>
        <main>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
