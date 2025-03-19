import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Loginpage.css"
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("All fields are required.");

      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user details found for this email.");
      return;
    }

    if (user.email === email && user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    if (user.email === email && user.password === password) {
      setFormError("");
      navigate("/Home"); 
    } else {
      setFormError("Invalid email or password.");
    }
  };

  return (
  <div className="login-complete">
    
    <h1 className="title">Login Page</h1>
    <div className="login-container">
      
    
    <div className="login-box">
      <h2>Hello, Welcome back!</h2>
      <form onSubmit={handleLogin}>
        <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        </div>
        {formError && <div className="error-message">{formError}</div>}
        <button type="submit">Log-in</button>
        <p>
        Don&apos;t have an account? <Link to="/Signup_page">Create one</Link>
        </p>
    </form>
  </div>
</div>
</div>
  );
};

export default Loginpage;