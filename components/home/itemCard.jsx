export const ItemCard = (e) => {
  return (
    <div className="w-1/2 py-4 pr-6">
      <div className=" font-bold">{e.title}</div>
      <div className="">
        {e.items.map((c, i) => (
          <>
            <a href={c.link}>{c.name}</a>
            {i < e.items.length - 1 && ", "}
          </>
        ))}
      </div>
      {e.period && <div className="">{e.period}</div>}
    </div>
  );
};
