import React, { useState, useEffect } from 'react';

import axios from 'axios'; // To send the API request
// import { authService } from '../Api/service/authService';
import { toast } from 'react-toastify';
import { authService } from '../Api/services/authService';

const Review = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    rating: '',
    reviewTitle: '',
    review: '',
    image:'',
    youtubeUrl: '',
    name: '',
    email: ''
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const token = authService.getToken();

  useEffect(() => {
      if (!token) {
          toast.error('No auth token found! Please login first.');
      }
  }, [token]);

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('rating', formData.rating);
    submitData.append('reviewTitle', formData.reviewTitle);
    submitData.append('review', formData.review);
    submitData.append('image', formData.image); 
    submitData.append('youtubeUrl', formData.youtubeUrl);
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);

    try {
      const response = await axios.post('/api/products/kundan-necklace-set/create-review', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': token,

        }
      });

      if (response.status === 201) {
        alert('Review created successfully');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to create review');
    }
  };

  return (
    <div>
      <div className="my-review-btn d-flex justify-content-center align-items-center" onClick={toggleFormVisibility}>
        {isFormVisible ? 'Cancel review' : 'Write the review'}
      </div>

      {isFormVisible && (
        <form className="custom-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="custom-form__title">Write a review</div>

          <div className="custom-form__fieldset">
            <label>Rating</label>
            <span className="custom-form__rating" style={{ cursor: 'pointer' }}>
              {[...Array(5)].map((_, index) => (
                <a
                  key={index + 1}
                  data-alt={index + 1}
                  className="custom-star custom--off"
                  title={`${index + 1} stars`}
                  role="button"
                  aria-label={`${index + 1} stars`}
                  onClick={() => setFormData({ ...formData, rating: index + 1 })}
                >
                  ★
                </a>
              ))}
              <input name="score" type="hidden" />
            </span>
          </div>

          <div className="custom-form__fieldset">
            <label htmlFor="custom_review_title">Review Title</label>
            <input
              id="custom_review_title"
              name="reviewTitle"
              type="text"
              placeholder="Give your review a title"
              value={formData.reviewTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="custom-form__fieldset">
            <label htmlFor="custom_review_body">Review</label>
            <textarea
              id="custom_review_body"
              rows="5"
              name="review"
              placeholder="Write your comments here"
              value={formData.review}
              onChange={handleInputChange}
            />
          </div>

          <div className="custom-form__fieldset">
            <label>Picture/Video (optional)</label>
            <input
              type="file"
              name="media"
              className="custom-media-fieldset__input"
              multiple={false}
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="custom-form__fieldset">
            <input
              name="youtubeUrl"
              type="url"
              placeholder="YouTube URL"
              value={formData.youtubeUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="custom-form__fieldset">
            <label htmlFor="custom_reviewer_name">Name</label>
            <input
              id="custom_reviewer_name"
              name="name"
              type="text"
              placeholder="Enter your name (public)"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="custom-form__fieldset custom-form__email-fieldset">
            <label htmlFor="custom_reviewer_email">Email</label>
            <input
              id="custom_reviewer_email"
              name="email"
              type="email"
              required
              placeholder="Enter your email (private)"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="custom-form__fieldset custom-form__fieldset-actions">
            <input type="submit" className="custom-btn custom-btn--solid custom-submit-rev" value="Submit Review" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Review;
