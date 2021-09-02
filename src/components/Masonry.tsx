import { useEffect } from "react";

export const Masonry = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.async = true;
    script2.async = true;

    script1.src = "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js";
    script2.src = "/masonry.js";

    script1.onload = function () {
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script2);
      document.body.removeChild(script1);
    };
  }, []);

  return null;
};
