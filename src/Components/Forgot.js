import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleEmailChange = (a) => {
    setEmail(a.target.value);
  };

  const handleOtpChange = (a) => {
    setOtp(a.target.value);
  };

  const handleEmailSubmit = (a) => {
    a.preventDefault();
    setIsEmailSent(true);
  };

  const handleOtpSubmit = (a) => {
    a.preventDefault();
    setIsOtpVerified(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {isEmailSent && !isOtpVerified ? (
          <form onSubmit={handleOtpSubmit}>
            <p className="text-lg font-semibold mb-4">Enter OTP</p>
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700">
                OTP
              </label>
              <input type="text" id="otp" className="form-input mt-1 block w-full rounded-md" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} required />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" > Verify OTP </button>
          </form>
        ) : (
          <form onSubmit={handleEmailSubmit}>
            <p className="text-lg font-semibold mb-4">Forgot Password</p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input mt-1 block w-full rounded-md"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Send Reset Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
