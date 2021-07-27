import { Socials } from "components/socials";

export const FooterSection = () => {
  return (
    <>
      <section>
        <div className="container flex justify-center py-28">
          <Socials></Socials>
        </div>
      </section>
      <footer className="section-footer">
        <div className="container flex flex-col items-center py-16">
          <p className="mb-3 space-x-4">
            <a href="/" rel="noopener noreferrer">
              Welcome
            </a>
            <a href="/category/software" rel="noopener noreferrer">
              Software
            </a>
            {/* <a href="/about" rel="noopener noreferrer">
              More About Me
            </a> */}
          </p>
          <p className="mt-3 text-sm">
            Powered by{" "}
            <a
              href="https://pages.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Pages
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
