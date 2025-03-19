import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="home-container">
        <section className="quote-section">
          <blockquote>
            <h2>&ldquo;Opportunities don’t happen. You create them.&rdquo;</h2>
            <footer>- Chris Grosser</footer>
          </blockquote>
        </section>

        <section className="welcome-section">
          <h1>Welcome to Job Tracker</h1>
          <p className="tagline">
            Manage your job applications efficiently in one place.
          </p>
          <p>
            Start tracking your job applications and stay organized with our
            easy-to-use platform.
          </p>
          <button 
            className="track-btn" 
            onClick={() => navigate("/dashboard")}
            aria-label="Track your job applications"
          >
            Track Applications
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
