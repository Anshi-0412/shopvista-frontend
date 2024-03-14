import React, { useState } from 'react';
import Registerpage from './Signup';
import ForgotPassword from './Forgot';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [SignUp, setSignUp] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);

  const Validate = () => {
    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailformat.test(username)) {
      alert('Enter Valid Email Address');
      return;
    }
    if (password === '') {
      alert('Please Enter Password');
      return;
    }

    console.log(`Username: ${username}, Password: ${password}`);
  };
  const Signuplink = () => {
    setSignUp(true);
  };

  if (SignUp) {
    return <Registerpage />;
  }
  const Forgotlink = () => {
    setforgotpassword(true);
  };

  if (forgotpassword) {
    return <ForgotPassword />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">LOGIN</h2>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Username</h3>
        <input type="text" name="uname" placeholder="Enter your Email ID" value={username} onChange={(a) => setUsername(a.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Password</h3>
        <input type="password" name="pass" placeholder="Enter Password" value={password} onChange={(a) => setPassword(a.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <a href="#" className="text-blue-500 hover:text-blue-700" onClick={Forgotlink}>Forgot password?</a>
      </div>
      <button onClick={Validate} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">LOGIN</button>
      <div className="mt-4">
        New User?  <a href="#" className="text-blue-500 hover:text-blue-700" onClick={Signuplink}>Register</a>
      </div>
    </div>
  );
}

export default Loginpage;
