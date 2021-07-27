export const ReferenceCard = (e) => {
  return (
    <div className="py-4 pr-6 w-1/2">
      <div className=" font-bold">{e.name}</div>
      <div className="whitespace-nowrap">{e.org}</div>
      {/* {e.tel && <div className="">{e.tel}</div>}
      {e.email && <div className="">{e.email}</div>} */}
    </div>
  );
};
