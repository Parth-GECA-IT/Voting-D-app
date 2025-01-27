import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <script
        data-cfasync="false"
        src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="/assets/js/plugins/plugins.js"></script>
      <script src="/assets/js/plugins/plugin-custom.js"></script>
      <script src="/assets/js/main.js"></script>
    </>
  );
}
