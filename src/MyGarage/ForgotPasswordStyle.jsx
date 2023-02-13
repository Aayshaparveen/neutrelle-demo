import React from "react";
import "./ForgotPasswordStyle.css";
const ForgotPassword = () => {
  const [Email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const handelChange = (e) => {
    console.log("output", e.target.value);
    if (e.target.name == "Email") {
      setEmail(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (Email == "") {
      setShowEmailError(true);
    }
  };
  return (
    <>
      <div className="Password-container">
        <div className="title">Forgot Password</div>
        <div className="Sub-title">
          Tell us your registered email and we'll send you a reset link.
        </div>
        <form>
          <CssTextField
            label="Email Address *"
            name="Email"
            id="custom-css-outlined-input"
            onChange={handelChange}
          />
          {showEmailError == true ? (
            <p className="error-text">This feild is required</p>
          ) : null}
        <button onClick={handleSubmit} className="SignIn-button">
          Send the Reset Link
        </button>
        <Link to="/MyGarage" className="SignIn-link">
                  Back to Sign In
                </Link>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
