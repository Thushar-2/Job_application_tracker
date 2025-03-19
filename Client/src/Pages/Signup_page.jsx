import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup_page.css"
const Signup_page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const isValidLength = password.length > 5;
    const hasNumber = /\d/.test(password);
    const hasAlphabet = /[a-zA-Z]/.test(password);

    if (!isValidLength) {
      return "Password must be longer than 5 characters.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasAlphabet) {
      return "Password must contain at least one letter.";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const errorMessage = validateEmail(newEmail);
    setEmailError(errorMessage);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/Loginpage");
  };

  return (
  <div> 
  <div className="signup-container">
  <h1 className="title">Create Account</h1> 
    <div className="signup-box">
      <h2>Let's Make it Happen Together!</h2>
      <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button type="submit">Create Account</button>
      <p>
        Already have an account? <Link to="/Loginpage">Login</Link>
      </p>
      </form>
    </div>
  </div>
  </div>

  );
};

export default Signup_page;