import React from "react";
import { useSelector } from "react-redux";

export default function RejectList() {
  const list = useSelector((state) => state.addToRejectList);
  console.log(list);

  return (
    <div>
      <div>
        <h1>Rejectlist</h1>
        {list.map((e) => {
          return (
            <div>
              <p>{e.id}</p>
              <p>{e.name}</p>
              <img src={`${e.image}`} alt={`${e.name}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
