import { Geist, Geist_Mono } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
import { VOTER_DAPP_PROVIDER } from "../context/context";
import "../styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "E-Voting DApp",
  description: "A decentralized voting application",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements */}
        <link rel="icon" href="/Logo.png" type="image/png" />
      </head>
      <body>
        <VOTER_DAPP_PROVIDER>
          {children}
          <Toaster />
        </VOTER_DAPP_PROVIDER>
        {/* Include the external scripts */}
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        ></script>
        <script src="/assets/js/plugins/plugins.js"></script>
        <script src="/assets/js/plugins/plugin-custom.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </html>
  );
}
