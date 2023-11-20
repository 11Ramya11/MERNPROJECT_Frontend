import React, { useState } from 'react';
import './Servicesae.css'; // Import a custom CSS file for additional styling
import { FaStar } from 'react-icons/fa';

const Servicesae = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/assets/Clothing51.jpg',
      reviews: [
        { id: 1, rating: 5, comment: 'Great product! Excellent quality.' },
        { id: 2, rating: 4, comment: 'Nice design and comfortable to wear.' },
      ],
    },
    {
      id: 2,
      image: '/assets/Clothing52.jpg',
      reviews: [
        { id: 3, rating: 3, comment: 'Decent product. Could be improved.' },
        { id: 4, rating: 5, comment: 'Love the style and fit.' },
      ],
    },
    {
      id: 3,
      image: '/assets/Clothing53.jpg',
      reviews: [
        { id: 5, rating: 4, comment: 'Good quality and comfortable.' },
        { id: 6, rating: 2, comment: 'Not satisfied with the purchase.' },
      ],
    },
    // Add more items as needed
  ]);

  const [activeItem, setActiveItem] = useState(items[0]);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmitReview = () => {
    if (userRating === 0 || userComment.trim() === '') {
      alert('Please provide both a rating and a review.');
      return;
    }

    const newItem = {
      ...activeItem,
      reviews: [
        ...activeItem.reviews,
        {
          id: activeItem.reviews.length + 1,
          rating: userRating,
          comment: userComment,
        },
      ],
    };

    setItems(items.map((item) => (item.id === activeItem.id ? newItem : item)));

    // Clear the form fields
    setUserRating(0);
    setUserComment('');
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="fs-3 text-center mb-0 text-warning">Welcome!</h3>
            <h1 className="display-6 text-center mb-4 text-warning">Westside Clothing Reviews</h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div
                className={`item-preview text-center ${activeItem.id === item.id ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
              >
                <img src={item.image} alt={`Item ${item.id}`} className="img-fluid mb-3" />
                <h5 className="item-title fs-4 fw-bold">Item #{item.id}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-8 mx-auto">
            <div className="item-details text-center">
              <h2 className="text-center mb-4">Item Details</h2>
              <img src={activeItem.image} alt={`Item ${activeItem.id}`} className="img-fluid mb-3" />
              <div className="reviews">
                {[...activeItem.reviews, ...items.find(item => item.id === activeItem.id)?.reviews].map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="rating">
                      {'★'.repeat(review.rating)}
                    </div>
                    <p className="review-text lead">{review.comment}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-4">Add Your Review</h3>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating:
                </label>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={`star-icon ${value <= userRating ? 'selected' : ''}`}
                      onClick={() => handleRatingChange(value)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="user-comment" className="form-label">
                  Your Review:
                </label>
                <textarea
                  className="form-control"
                  id="user-comment"
                  rows="4"
                  value={userComment}
                  onChange={handleCommentChange}
                  placeholder="Write your review here..."
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleSubmitReview}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesae;
