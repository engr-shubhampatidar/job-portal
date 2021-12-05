import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToShortList } from "../Redux/shortListReducer";
import { addToRejectList } from "../Redux/rejectListReducer";

export default function Detail() {
  const [candidates, setCandidates] = useState([]);
  const id = useParams();
  const dispatch = useDispatch();

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
  }, [id]);

  return (
    <div className="container">
      {candidates.map((candidate) => {
        if (candidate.id == id.id) {
          return (
            <div className="card" key={candidate.id}>
              <img src={`${candidate.Image}`} alt={`${candidate.name}`} />
              <div>
                <p>{candidate.name}</p>
              </div>

              <button
                onClick={() => {
                  dispatch(
                    addToShortList({
                      id: candidate.id,
                      name: candidate.name,
                      image: candidate.Image,
                    })
                  );
                }}
              >
                ShortList
              </button>
              <button
                onClick={() => {
                  dispatch(
                    addToRejectList({
                      id: candidate.id,
                      name: candidate.name,
                      image: candidate.Image,
                    })
                  );
                }}
              >
                RejectList
              </button>
            </div>
          );
        }
      })}
    </div>
  );
}
