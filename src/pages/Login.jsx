import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../Api/axios/axios_config';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRecoverPassword, setShowRecoverPassword] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const { login } = useAuth(); 

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await instance.post('/user/auth/login', {
        email,
        password,
      });

      if (response.data && response.data.success) {
        toast.success('Login successful!');
        login(response.data.authtoken); 
        navigate('/Dashboard');
      } else {
        toast.error(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRecoverPasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Recover password submitted', { recoverEmail });
  };

  const toggleRecoverPassword = () => {
    setShowRecoverPassword(!showRecoverPassword);
  };

  return (
    <main id="content" className="main-content">
      {loading && (
        <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}

      <div className="container_main" style={{ display: loading ? 'none' : 'block' }}>
        <div id="template">
          <div className="small-form">
            {!showRecoverPassword ? (
              <div id="customer">
                <div className="template_header">
                  <h2 className="title">Login</h2>
                </div>
                <form onSubmit={handleLoginSubmit} id="customer_login">
                  <input type="hidden" name="form_type" value="customer_login" />
                  <input type="hidden" value="✓" />
                  <div id="login_email" className="input-row input">
                    <label htmlFor="customer_email" className="login">Email</label>
                    <input
                      type="email"
                      name="customer[email]"
                      id="customer_email"
                      className="large form-control"
                      size="30"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div id="login_password" className="input-row input">
                    <label htmlFor="customer_password" className="login">Password</label>
                    <div className="text-over-input">
                      <input
                        type="password"
                        id="customer_password"
                        className="large password form-control"
                        size="16"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div id="forgot_password" className="text-over-input__text">
                        <Link to="/Forget_Password" onClick={toggleRecoverPassword}>Forgot your password?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="action_bottom">
                    <div className="opposing-items">
                      <button className="btn btn-dark" style={{ borderRadius: 0 }} type="submit">
                        Sign In
                      </button>
                      <Link to="/Registration">Create account</Link>
                    </div>
                  </div>
                </form>
                <iframe
                  id="one-click-social-login-buttons-1"
                  className="one-click-social-login-buttons"
                  frameBorder="0"
                  style={{ marginTop: '30px', width: '100%', overflow: 'hidden', height: '75px' }}
                  data-default_style="margin-top: 10px; overflow: hidden; width: 100%;"
                  allowTransparency="yes"
                  src="https://oneclicksociallogin.devcloudsoftware.com/api/socialbuttons/?cache_key=149110128&shop=kushalsonline-com.myshopify.com&popup_type=&current_url=https%3A%2F%2Fwww.kushals.com%2Faccount%2Flogin&iframe_id=1&button_font_color=&terms_font_color=&background_color="
                  title="Social Login Buttons"
                />
              </div>
            ) : (
              <div id="recover-password">
                <form onSubmit={handleRecoverPasswordSubmit}>
                  <input type="hidden" name="form_type" />
                  <input type="hidden" value="✓" />
                  <div className="template_header">
                    <h2 className="title">Reset your password</h2>
                    <p className="note">We will send you an email to reset your password.</p>
                  </div>
                  <div id="recover_email" className="input-row">
                    <label htmlFor="recover-email" className="large">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="recover-email"
                      className="large form-control"
                      size="30"
                      value={recoverEmail}
                      onChange={(e) => setRecoverEmail(e.target.value)}
                    />
                  </div>
                  <div className="action_bottom">
                    <p>
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </p>
                    <span className="note"><Link to="#" onClick={toggleRecoverPassword}>Cancel</Link></span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer /> 
    </main>
  );
};

export default Login;
