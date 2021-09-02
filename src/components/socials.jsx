import GitHub from "./svg/github.svg";
import LinkedIn from "./svg/linkedin.svg";
import Twitter from "./svg/twitter.svg";

export const Socials = () => {
  return (
    <nav className="flex space-x-3 hover:text-gray-400">
      <a
        href="https://github.com/tjmkruger"
        target="_blank"
        aria-label="GitHub"
        className="hover:text-gray-900"
      >
        <GitHub width="24"></GitHub>
      </a>
      <a
        href="https://twitter.com/tjmkruger"
        target="_blank"
        aria-label="Twitter"
        className="hover:text-gray-900"
      >
        <Twitter width="24"></Twitter>
      </a>
      <a
        href="https://www.linkedin.com/in/terence-kruger/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B3EANFvRdSLqudiESlv4lTQ%3D%3D"
        target="_blank"
        aria-label="LinkedIn"
        className="hover:text-gray-900"
      >
        <LinkedIn width="24"></LinkedIn>
      </a>
    </nav>
  );
};
