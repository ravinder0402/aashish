import React, { useState } from "react";
import "./OTPForms.css";
import UserPage from "./components/UserPage";
import axios from "axios";

const OTPFormes = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpGenerated, setOTPGenerated] = useState(false);

  const generateOTP = async () => {
    try {
      if (!email.trim()) {
        alert("Please enter your email");
        return;
      }

      const response = await axios.post("http://localhost:8088/send-otp", {
        email,
      });
      const { data } = response;
      if (data.otp) {
        setOTPGenerated(true);
        alert("OTP has been sent to your email.");
      }
    } catch (error) {
      console.error("Failed to generate OTP:", error);
      alert("Failed to generate OTP. Please try again");
    }
  };

  const validateOTP = async () => {
    try {
      if (!otp.trim()) {
        alert("please enter OTP");
        return;
      }
      const response = await axios.post(
        `http://localhost:8088/validate-otp/${otp}`
      );
      const { data } = response;
      if (data.message) {
        alert("OTP is valid.You have successfully logged in !");
        window.location.href = "../UserPage";
      }
    } catch (error) {
      console.error("Failed to validate OTP:", error);
      alert("invalid OTP. please try again");
    }
  };
  return (
    <div className="main-div">
      <div className="otp-form-container">
        <h1>OTP Authentication</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button onClick={generateOTP}>Generate OTP</button>
        </div>
        {otpGenerated && (
          <div>
            <label>Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
          </div>
        )}
        {otpGenerated && (
          <div>
            <button onClick={validateOTP}>Validate OTP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPFormes;
