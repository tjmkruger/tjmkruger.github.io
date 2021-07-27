export const Quote = ({ caption, children }) => {
  return (
    <figure>
      <blockquote className="text-2xl">
        <span>“</span>
        {children}
        <span>”</span>
      </blockquote>
      <figcaption className="text-sm py-2">{caption}</figcaption>
    </figure>
  );
};
