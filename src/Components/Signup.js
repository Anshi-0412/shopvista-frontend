import React, { useState } from 'react';
import Loginpage from './login';

function Registerpage() {
  const [Name, setName] = useState('');
  const [PhoneNumber, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Login, setlogin] = useState(false);

  const Validate = () => {
    if (Name === '') {
      alert('Please Enter Name');
      return;
    }
    if (PhoneNumber === '') {
      alert('Please Enter Phone Number');
      return;
    }
    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailformat.test(email)) {
      alert('Please Enter Valid Email Address');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(`Name: ${Name}, Phone Number: ${PhoneNumber}, Email: ${email}, Password: ${password}`);
  };
  const loginlink = () => {
    setlogin(true);
  };

  if (Login) {
    return <Loginpage />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Name</h3>
        <input type="text" placeholder="Enter Name" value={Name} onChange={(a) => setName(a.target.value)} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Phone Number</h3>
        <input type="tel" placeholder="Enter Phone Number" value={PhoneNumber} onChange={(a) => setNumber(a.target.value)} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Email ID</h3>
        <input type="email" placeholder="Email" value={email} onChange={(a) => setEmail(a.target.value)} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Password</h3>
        <input type="password" placeholder="Password" value={password} onChange={(a) => setPassword(a.target.value)} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg mb-1">Confirm Password</h3>
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(a) => setConfirmPassword(a.target.value)} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <button onClick={Validate} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</button>
      <div className="mt-4">
        Already Registered?  <a href="#" className="text-blue-500 hover:text-blue-700" onClick={loginlink}>Login</a>
      </div>
    </div>
  );
}

export default Registerpage;