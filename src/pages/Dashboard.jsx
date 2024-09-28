import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Api/axios/axios_config';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { authService } from '../Api/services/authService';
import Spinner from '../components/Spinner';
const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const token = authService.getToken();
  console.log(token);
  useEffect(() => {
    console.log("this useffect is running");
    if (!token) {
      toast.error('No auth token found! Please login first.');
      console.log('No auth token found! Please login first.');
      navigate('/login');
      return;
    }

    axios.get('/user/auth/getuser/', {
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token,
      },
    })
      .then(response => {
        if (response.data) {
          console.log('User data:', response.data);
          setUserData(response.data);
        } else {
          toast.error('Failed to fetch user data.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the user data:', error);
        toast.error('An error occurred while fetching user data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  if (loading) {
    return <div className="spinner-overlay d-flex justify-content-center align-items-center">
    <Spinner/>
  </div>;
  }

  return (
    <div className='dashboard-box'>
      <main className="content-section-dashboard">
        <div className="content-container">
          <div className="admin-header">
            <div className="action-link d-flex justify-content-between align-items-center">
              <Link to="/">Return to Store</Link>
              <button onClick={handleLogout} className="btn btn-danger" style={{ backgroundColor: 'rgb(15,66,163)' , border: 'none'}}>Logout</button>
            </div>
            <h2 className="title">My Account</h2>
          </div>

          <div className="admin-sidebar">
            <div className="admin-detail">
              <h5 className="name dash-name">
                {userData.firstName} {userData.lastName}
              </h5>
              <p className="email note">
                {userData.email}
              </p>
              <div className="address note lightly-spaced-row">
                <p>{userData.contactNumber}</p>
                <p></p>
                <p>, India</p>
                <p></p>
                <p></p>
              </div>
              <Link id="view_address" to='/Dashboard/AddressPage'>
                View Addresses (1)
              </Link>
            </div>
          </div>
          <div className="admin-page">
            <p>You haven't placed any orders yet.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
