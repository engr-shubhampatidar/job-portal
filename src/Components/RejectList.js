import React from "react";
import { useSelector } from "react-redux";

export default function RejectList() {
  const list = useSelector((state) => state.addToRejectList);
  console.log(list);

  return (
    <div className="container">      
        <h1>Rejectlist</h1>
        {list ? (list.map((e) => {
          return (
            <div className="card">
              <p>{e.id}</p>
              <p>{e.name}</p>
              <img src={`${e.image}`} alt={`${e.name}`} />
            </div>
          );
        })) : <l1>No One</l1>}
      </div>
  );
}
