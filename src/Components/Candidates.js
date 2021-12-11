import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Detail from "./Detail";

// style
import "./style.css";

function sendData(id, navigate) {
  navigate(`/detail/${id}`);
}

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const getCandidates = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        setCandidates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const searchUser = (userName) => {
    const searchedUser = candidates.filter((user) => {
      return user.name === userName;
    });
    setCandidates(searchedUser);
  };

  return (
    <div className="container">
      <input
        name="search"
        placeholder="Search.."
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={() => searchUser(userName)}>Search</button>

      {candidates.map((candidate) => {
        return (
          <div className="card" key={candidate.id}>
            <img src={`${candidate.Image}`} alt={`${candidate.name}`} />
            <div>
              <p onClick={() => sendData(candidate.id, navigate)}>
                {candidate.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Candidates;
