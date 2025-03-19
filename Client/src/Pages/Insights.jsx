import React from "react";
import Navbar from "../Components/Navbar";
import { Bar } from "recharts";
import "./Insights.css";

const data = [
  { name: "Applied", count: 25 },
  { name: "Interview Scheduled", count: 5 },
  { name: "Rejected", count: 10 },
  { name: "Pending", count: 8 }
];

const Insights = () => {
  return (
    <>
      <Navbar />
      <main className="insights-container">
        <h1>Job Application Insights</h1>
        <p className="description">
          Gain valuable insights into your job application process and track your progress.
        </p>
        <section className="insights-content">
          <div className="insight-card">
            <h2>Total Applications</h2>
            <p>25</p>
          </div>
          <div className="insight-card">
            <h2>Interviews Scheduled</h2>
            <p>5</p>
          </div>
          <div className="insight-card">
            <h2>Offers Received</h2>
            <p>2</p>
          </div>
          <div className="insight-card">
            <h2>Rejections</h2>
            <p>10</p>
          </div>
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
