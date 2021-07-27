import { CloudinaryContext } from "cloudinary-react";
import "tailwindcss/tailwind.css";

import { Layout } from "../components/Layout";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="dzsctzoq8">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CloudinaryContext>
  );
}

export default MyApp;
