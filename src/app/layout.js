import "./globals.css";
import Header from "../components/header";


export const metadata = {
  title: "Dijie",
  description: "A modern take on a classic camera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
