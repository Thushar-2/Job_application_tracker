import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";


const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [updatedJob, setUpdatedJob] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5091/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5091/api/jobs/${id}`)
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      })
      .catch((err) => console.error("Error deleting job:", err));
  };

  const handleEdit = (job) => {
    setEditingJob(job.id);
    setUpdatedJob({ ...job });
  };

  const handleChange = (e) => {
    setUpdatedJob({ ...updatedJob, [e.target.name]: e.target.value });
  };


  const handleUpdate = () => {
    axios
      .put(`http://localhost:5091/api/jobs/${editingJob}`, updatedJob)
      .then(() => {
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job.id === editingJob ? updatedJob : job))
        );
        setEditingJob(null);
      })
      .catch((err) => console.error("Error updating job:", err));
  };

  return (
    <>
      
      <div className="dashboard-container">
        <h2 className="dashboard-title">Job Applications</h2>

        <div className="table-container">
          <table className="jobs-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
                <th>Applied Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id}>
                  {editingJob === job.id ? (
                    <>
                      <td>{index + 1}</td>
                      <td>{job.company}</td>
                      <td>{job.position}</td>
                      <td>
                        <select name="status" value={updatedJob.status} onChange={handleChange} className="status-select">
                          <option value="Pending">Pending</option>
                          <option value="Applied">Applied</option>
                          <option value="Interview Scheduled">Interview Scheduled</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                      <td>
                        <button onClick={handleUpdate} className="save-btn">Save</button>
                        <button onClick={() => setEditingJob(null)} className="cancel-btn">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{index + 1}</td>
                      <td>{job.company}</td>
                      <td>{job.position}</td>
                      <td>
                        <span className={`status-label ${job.status.toLowerCase().replace(" ", "-")}`}>
                          {job.status}
                        </span>
                      </td>
                      <td>{new Date(job.appliedDate).toLocaleDateString()}</td>
                      <td>
                        <button onClick={() => handleEdit(job)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(job.id)} className="delete-btn">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
