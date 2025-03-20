import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";
import "./Insights.css";

const Insights = () => {
  const [data, setData] = useState([
    { name: "Applied", count: 0 },
    { name: "Interview Scheduled", count: 0 },
    { name: "Rejected", count: 0 },
    { name: "Pending", count: 0 }
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5091/api/jobs")
      .then((res) => {
        const jobCounts = {
          Applied: 0,
          "Interview Scheduled": 0,
          Rejected: 0,
          Pending: 0,
        };
        
        res.data.forEach((job) => {
          if (jobCounts[job.status] !== undefined) {
            jobCounts[job.status]++;
          }
        });
        
        setData([
          { name: "Applied", count: jobCounts["Applied"] },
          { name: "Interview Scheduled", count: jobCounts["Interview Scheduled"] },
          { name: "Rejected", count: jobCounts["Rejected"] },
          { name: "Pending", count: jobCounts["Pending"] }
        ]);
      })
      .catch((err) => console.error("Error fetching job data:", err));
  }, []);

  return (
    <>
      <Navbar />
      <main className="insights-container">
        <h1>Job Application Insights</h1>
        <p className="description">
          Gain valuable insights into your job application process and track your progress.
        </p>
        <section className="insights-content">
          {data.map((item) => (
            <div className="insight-card" key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.count}</p>
            </div>
          ))}
        </section>
        <section className="insights-graph">
          <h2>Application Status Overview</h2>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" barSize={50} />
          </BarChart>
        </section>
      </main>
    </>
  );
};

export default Insights;
