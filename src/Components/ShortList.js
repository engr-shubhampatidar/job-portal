import React from "react";
import { useSelector } from "react-redux";

export default function ShortList() {
  const list = useSelector((state) => state.shortlist);
  console.log(list);

  return (
    <div className="container">
      <h1>ShortList</h1>
      {list && list.map((e) => {
        return (
          <div className="card">
            <p>{e.id}</p>
            <p>{e.name}</p>
            <img src={`${e.image}`} alt={`${e.name}`} />
          </div>
        );
      })}
    </div>
  );
}
