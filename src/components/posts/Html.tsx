import parseHtml from "html-react-parser";

export const Html = ({ content }: { content: string }) => {
  return <div className="">{parseHtml(content)}</div>;
};
