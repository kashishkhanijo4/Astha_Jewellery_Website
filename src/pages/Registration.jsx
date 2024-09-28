import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../components/Spinner'; 

const Registration = () => {
    const [showRecoverPassword, setShowRecoverPassword] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        contactNumber: '',
    });
    

    const handleRecoverPassword = (e) => {
        e.preventDefault();
        setShowRecoverPassword(!showRecoverPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show spinner when form submission starts
        
        try {
            const response = await fetch('https://astha-backend.vercel.app/user/auth/createuser', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                toast.success('Account created successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    email: '',
                    password: '',
                    contactNumber: '',
                });
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || 'Failed to create account');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false); // Hide spinner when form submission ends
        }
    };

    return (
        <main id="content" className="main-content">
            <ToastContainer />
            {loading ? (
                <div className="spinner-overlay d-flex justify-content-center align-items-center">
                    <Spinner />
                </div>
            ) : (
                <div className="container_main">
                    <div id="template" className='registertemplate'>
                        {!showRecoverPassword ? (
                            <div className="small-form">
                                <div id="customer">
                                    <div className="template_header">
                                        <h2 className="title">Create Account</h2>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-row input">
                                            <label htmlFor="customer_first_name" className="login">First Name</label>
                                            <input 
                                                type="text" 
                                                name="firstName" 
                                                id="customer_first_name" 
                                                className="large form-control" 
                                                size="30" 
                                                value={formData.firstName} 
                                                onChange={handleChange} 
                                            />
                                        </div>

                                        <div className="input-row input">
                                            <label htmlFor="customer_last_name" className="login">Last Name</label>
                                            <input 
                                                type="text" 
                                                name="lastName" 
                                                id="customer_last_name" 
                                                className="large form-control" 
                                                size="30" 
                                                value={formData.lastName} 
                                                onChange={handleChange} 
                                            />
                                        </div>

                                        <div className="input-row input">
                                            <label htmlFor="customer_dob" className="logindob">Date of Birth</label>
                                            <input 
                                                type="date" 
                                                name="dateOfBirth"  
                                                id="customer_dob" 
                                                className="large form-control" 
                                                size="30" 
                                                value={formData.dateOfBirth}  
                                                onChange={handleChange} 
                                            />
                                        </div>

                                        <div className="input-row input">
                                            <label htmlFor="customer_contact_number" className="login">Contact Number</label>
                                            <input 
                                                type="text" 
                                                name="contactNumber" 
                                                id="customer_contact_number" 
                                                className="large form-control" 
                                                size="30" 
                                                value={formData.contactNumber} 
                                                onChange={handleChange} 
                                            />
                                        </div>

                                        <div className="input-row input">
                                            <label htmlFor="customer_email" className="login">Email</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="customer_email" 
                                                className="large form-control" 
                                                size="30" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                        

                                        <div className="input-row input">
                                            <label htmlFor="customer_password" className="login">Password</label>
                                            <div className="text-over-input">
                                                <input 
                                                    type="password" 
                                                    name="password" 
                                                    id="customer_password" 
                                                    className="large password form-control" 
                                                    size="16" 
                                                    value={formData.password} 
                                                    onChange={handleChange} 
                                                />
                                            </div>
                                            <div className="input-row ct_input-row" style={{ fontWeight: 400 }}>
                                                <input type="checkbox" name="Accept" id="ct_accept" value="checkbox" defaultChecked />
                                                <label htmlFor="ct_accept">I accept to receive messages via WhatsApp or SMS</label>
                                            </div>
                                        </div>

                                        <div className="action_bottom d-flex flex-column justify-content-start gap-2">
                                            <div className="opposing-items flex-column">
                                                <button className="btn btn-dark" type="submit" disabled={loading}>Create</button>
                                                <Link to="/login">Login with an existing account or return to store</Link>
                                            </div>
                                        </div>
                                    </form>
                                    <iframe
                                        id="one-click-social-login-buttons-1"
                                        className="one-click-social-login-buttons"
                                        style={{ marginTop: '30px', width: '100%', overflow: 'hidden', height: '75px' }}
                                        allowTransparency="yes"
                                        src="https://oneclicksociallogin.devcloudsoftware.com/api/socialbuttons/?cache_key=149110128&shop=kushalsonline-com.myshopify.com&popup_type=&current_url=https%3A%2F%2Fwww.kushals.com%2Faccount%2Flogin&iframe_id=1&button_font_color=&terms_font_color=&background_color="
                                        title="Social Login Buttons"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div id="recover-password">
                                <form>
                                    <div className="template_header">
                                        <h2 className="title">Reset your password</h2>
                                        <p className="note">We will send you an email to reset your password.</p>
                                    </div>
                                    <div className="input-row">
                                        <label htmlFor="recover-email" className="large">Email</label>
                                        <input type="email" name="email" id="recover-email" className="large form-control" size="30" />
                                    </div>
                                    <div className="action_bottom">
                                        <p>
                                            <button className="btn btn-primary" type="submit">Submit</button>
                                        </p>
                                        <span className="note"><a href="#" onClick={handleRecoverPassword}>Cancel</a></span>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Registration;
