import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

interface Candidate {
  id: number;
  name: string;
  location: string;
  email: string;
  company: string;
  bio: string;
  avatar_url: string;
}

const CandidateSearch = () => {
  const [q, setQ] = useState("");
  const [person, setPerson] = useState<Candidate[]>([]);
  const [saveCandidate, setSaveCandidate] = useState<Candidate[]>(() => {
    return JSON.parse(localStorage.getItem("candidates"));
  });

  const handleSearch = async () => {
    try {
      const results = await searchGithub(q);
      setPerson(results.items);
    } catch (error) {
      console.error("error:", error);
    }
  };

  const candiateS = (candidate: Candidate) => {
    const save = [...candiateS, candidate];
    setSaveCandidate(save);
    localStorage.setItem("savedCandidates", JSON.stringify(save));
  };

  return (
    <div>
      <h1>Candidate Search</h1>
    </div>
  );
};

export default CandidateSearch;
