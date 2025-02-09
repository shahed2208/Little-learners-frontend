import React from 'react';
import './Testimonials.css';
import jenn from '../../img/jenn.png';
import david from '../../img/david.png';
import emily from '../../img/emily.png';
const testimonials = [
    {
      image: jenn,
      name: 'Jennifer B',
      rating: 5,
      text: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
    },
    {
      image: david,
      name: 'David K',
      rating: 4,
      text: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
    },
    {
      image: emily,
      name: 'Emily L',
      rating: 3,
      text: 'My son\'s social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.',
    },
  ];
function Testimonials() {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>);
        }
        return stars;
      };
  return (
    <div>
    <section className="testimonials-section">
      <div className="testimonials-content">
        <button className="testimonials-button">Their Happy Words <span role="img" aria-label="Smiling Face With Smiling Eyes"></span></button>
        <h2>Our Testimonials</h2>
        <p>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
      </div>
    </section>
      <section className="testimonials-section">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            </div>
            <h3>{testimonial.name}</h3>
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Testimonials;