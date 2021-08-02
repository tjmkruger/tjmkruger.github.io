import { CloudinaryContext } from "cloudinary-react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

import { Layout } from "../components/Layout";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <CloudinaryContext cloudName="dzsctzoq8">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CloudinaryContext>
    </>
  );
}

export default MyApp;
