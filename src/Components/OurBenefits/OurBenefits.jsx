import React from 'react';
import './OurBenefits.css';
import b1 from '../../img/b1.png';
import b2 from '../../img/b2.png';
import b3 from '../../img/b3.png';
import b4 from '../../img/b4.png';
import b5 from '../../img/b5.png';
import b6 from '../../img/b6.png';
const benefits = [
    { icon: b1, title: 'Holistic Learning Approach', description: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.' },
    { icon: b2, title: 'Experienced Educators', description: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.' },
    { icon: b3, title: 'Nurturing Environment', description: 'We prioritize safety and provide a warm and caring atmosphere for every child.' },
    { icon: b4, title: 'Play-Based Learning', description: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.' },
    { icon: b5, title: 'Individualized Attention', description: 'Our small class sizes enable personalized attention, catering to each child\'s unique needs.' },
    { icon: b6, title: 'Parent Involvement', description: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.' },
  ];
function OurBenefits() {
  return (
    <div>
    <section className="our-benefits-section">
      <div className="our-benefits-content">
        <button className="benefits-button">Children Deserve Bright Future</button>
        <h2>Our Benefits</h2>
        <p>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
      </div>
    </section>
     <section className="benefits-section">
     <div className="benefits-container">
       {benefits.map((benefit, index) => (
         <div className="benefit-card" key={index}>
           <div className="icon-container">
             <img src={benefit.icon} alt={benefit.title + " Icon"} className="benefit-icon" />
           </div>
           <h3>{benefit.title}</h3>
           <p>{benefit.description}</p>
         </div>
       ))}
     </div>
   </section>
   </div>
  );
}

export default OurBenefits;