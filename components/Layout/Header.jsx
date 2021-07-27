export const HeaderSection = () => {
  return (
    <header>
      <div className="container pt-10 flex">
        <div className="flex-1 flex">
          <nav className="whitespace-nowrap px-1 py-2 space-x-4">
            <a href="/">Welcome</a>
            <a href="/category/software">Software</a>
          </nav>
        </div>
        <div className="flex-0">
          <a
            href="/"
            className="block text-xl uppercase tracking-widest px-1 py-2 "
          >
            Terence Kruger
          </a>
        </div>
        <div className="flex-1 flex justify-end">
          <nav className=" whitespace-nowrap px-1 py-2 space-x-4">
            <a target="_blank" href="https://github.com/tjmkruger">
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/terence-kruger/"
            >
              LinkedIn
            </a>
            <a target="_blank" href="https://twitter.com/tjmkruger">
              Twitter
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
