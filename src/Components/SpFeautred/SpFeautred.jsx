import React from 'react'
import './SpFeautred.css'
import book from '../../img/book.png'; 
import sun from '../../img/sun.png';
import star from '../../img/star.png';
import brush from '../../img/brush.png';
import wifi from '../../img/wifi.png';
import puzzel from '../../img/puzzel.png';
const features = [
    { icon: book, title: 'Thematic Learning', description: 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.' },
    { icon: sun, title: 'STEAM Education', description: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.' },
    { icon: star, title: 'Language Immersion', description: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.' },
    { icon: brush, title: 'Art and Creativity', description: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.' },
    { icon: wifi, title: 'Outdoor Education', description: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.' },
    { icon: puzzel, title: 'Play-Based Learning', description: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.' },
  ];
const SpFeautred = () => {
  return (
    <div>
       <section className="special-features-section">
      <div className="special-features-content">
        <button className="features-button">Our Features</button>
        <h2>Our Special Features</h2>
        <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
      </div>
    </section>
    <section className="features-cards-section">
      <div className="features-cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title + " Icon"} className="card-icon" /> {/* عرض الصورة */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default SpFeautred
