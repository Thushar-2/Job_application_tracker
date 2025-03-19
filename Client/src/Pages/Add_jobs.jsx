import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import "./Add_jobs.css";

const AddJobs = () => {
  const [newJobData, setNewJobData] = useState({
    company: "",
    position: "",
    status: "Pending",
  });

  const handleCreateJob = () => {
    if (!newJobData.company || !newJobData.position) {
      alert("Please fill in all fields.");
      return;
    }

    const newJob = {
      company: newJobData.company,
      position: newJobData.position,
      status: newJobData.status || "Pending",
    };
    alert("Sending data to API:", newJob);
    axios
      .post("http://localhost:5091/api/jobs", newJob, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log("Response from API:", res.data);
        setNewJobData({ company: "", position: "", status: "Pending" });
      })
      .catch((err) => {
        console.error("Error adding job:", err.response?.data || err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="add-job-container">
        <div className="add-job-card">
          <h2>Add a New Job</h2>
          <input
            type="text"
            placeholder="Company Name"
            value={newJobData.company}
            onChange={(e) =>
              setNewJobData({ ...newJobData, company: e.target.value })
            }
            className="input-field"
          />
          <input
            type="text"
            placeholder="Position"
            value={newJobData.position}
            onChange={(e) =>
              setNewJobData({ ...newJobData, position: e.target.value })
            }
            className="input-field"
          />
          <button onClick={handleCreateJob} className="add-job-btn">
            Add Job
          </button>
        </div>
      </div>
    </>
  );
};

export default AddJobs;
