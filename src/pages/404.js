import { useEffect, useState } from "react";
import Head from "next/head";

export default function Custom404() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const path = window.location.href;
    if (path.toLowerCase() !== path) {
      return (window.location = path.toLowerCase());
    }
    setChecked(true);
  }, []);

  return (
    <div>
      <Head>
        <title>Squash Fusion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {checked && <h1>404 - Page Not Found</h1>}
    </div>
  );
}
