import { HeaderSection } from "./Header";
import { FooterSection } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection />
      <main>{children}</main>
      <FooterSection />
    </>
  );
};
