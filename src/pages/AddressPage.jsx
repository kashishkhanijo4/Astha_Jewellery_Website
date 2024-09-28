import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { authService } from '../Api/services/authService'

const AddressContent = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const [addressType, setAddressType] = useState('Address1'); // New state to choose between Address1 and Address2

  const handleAddNewAddress = (e) => {
    e.preventDefault();
    setEditingAddress(null);
    setFormVisible(true);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const token = authService.getToken(); // Fetch token from authService

  useEffect(() => {
    if (!token) {
      toast.error('No auth token found! Please login first.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!firstName || !lastName || !addressLine1 || !country || !zipcode || !phone) {
      toast.error('Please fill out all required fields.');
      return;
    }

    const formData = {
      firstName,
      lastName,
      company,
      addressLine1,
      addressLine2,
      country,
      zipcode,
      phone,
      isDefault,
    };

    setLoading(true);

    try {
      // Determine the API endpoint based on the addressType selected
      const apiUrl = addressType === 'Address1' 
        ? '/user/auth/create-address/Address1' 
        : '/user/auth/create-address/Address2';

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });

      if (response.status === 200 || response.status === 201) {
        toast.success('Address added successfully!');
        setFormVisible(false);
        // Reset form fields
        setFirstName("");
        setLastName("");
        setCompany("");
        setAddressLine1("");
        setAddressLine2("");
        setCountry("");
        setZipcode("");
        setPhone("");
        setIsDefault(false);
      } else {
        toast.error(`Failed to add address. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error adding address:', error.response?.data || error.message);
      toast.error(`An error occurred: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormVisible(false);
    setEditingAddress(null);
    // Reset form fields
    setFirstName("");
    setLastName("");
    setCompany("");
    setAddressLine1("");
    setAddressLine2("");
    setCountry("");
    setZipcode("");
    setPhone("");
    setIsDefault(false);
  };

  return (
    <main className="addresscontent">
      <div className="content-container">
        <div className="admin-header">
          <div className="action-link">
            <Link to="/Dashboard">Return to Account Details</Link>
          </div>
        </div>
        <h2 className="title">Your Addresses</h2>

        <div className="action-top">
          <Link
            to="#"
            className="button altcolour"
            onClick={handleAddNewAddress}
          >
            Add a New Address
          </Link>
        </div>
      </div>

      {formVisible && (
        <div className="form-container">
          <h2>{editingAddress ? "Edit Address" : "Add a New Address"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine1">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="China">China</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Postal/Zipcode</label>
              <input
                type="number"
                id="zipcode"
                name="zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <span>Please enter at max 10 digits without country code</span>
            </div>

            {/* Address Type Selection */}
            <div className="form-group">
              <label>Address Type</label>
              <select
                value={addressType}
                onChange={(e) => setAddressType(e.target.value)}
              >
                <option value="Address1">Address1</option>
                <option value="Address2">Address2</option>
              </select>
            </div>

            <div className="input-row">
              <label>
                <input
                  type="checkbox"
                  name="defaultAddress"
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                />{" "}
                Set as default address
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="btn-dark btn" disabled={loading}>
                {editingAddress ? "Save Address" : "Add Address"}
              </button>
            </div>
            <div className="form-group">
              <Link to="#" className="a" onClick={handleCancel}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default AddressContent;
