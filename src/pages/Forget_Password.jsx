import React from 'react';
import { Link } from 'react-router-dom';


const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center align-items-center gap-3 p-4"
      style={{ maxWidth: '420px', margin: '50px auto' }}
    >
      <h3 className="heading">Reset your password</h3>
      <p className="text-center">We will send you an email to reset your password.</p>
      <div className="form-input w-100 d-flex flex-column">
        <label className="my-2">Email</label>
        <input
          type="email"
          className="form-control"
          style={{ height: '46px' }}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark" style={{ borderRadius: "0",position:"relative",
    right:"137px", padding:"10px 25px"}}>
    
        Submit
      </button>
      <Link href="./Login" className="cancel text-center mt-2" style={{ position:"relative",
    right:"153px"}}>
        Cancel
      </Link>
    </form>
  );
};

export default ResetPassword;
