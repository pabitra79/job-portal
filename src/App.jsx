import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Index";
import Header from "./components/Header/Index";
import SearchBar from "./components/SearchBar/Index";
import JobCard from "./components/JobCard/Index";
import JobDummyData from "./JobDummyData";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc, id, "=>", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postOn: job.data().postOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", "jobCriteria.type"),
      where("title", "==", "jobCriteria.title"),
      where("Experience", "==", "jobCriteria.Experience"),
      where("Location", "==", "jobCriteria.Location"),
      orderBy("postOn", "desc")
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc, id, "=>", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postOn: job.data().postOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          {" "}
          <p className="bg-blue-500 px-1 py-2 rounded text-white">
            clear filter
          </p>
        </button>
      )}
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
