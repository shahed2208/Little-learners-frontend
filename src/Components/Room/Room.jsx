
import './Room.css'
import class1 from '../../img/class1.png';
import class2 from '../../img/class2.png';
import class3 from '../../img/class3.png';
import class4 from '../../img/class4.png';
import l1 from '../../img/l1.png';
import l2 from '../../img/l2.png';
import l3 from '../../img/l3.png';
import l4 from '../../img/l4.png';
import s1 from '../../img/s1.png';
import s2 from '../../img/s2.png';
import s3 from '../../img/s3.png';
import s4 from '../../img/s4.png';
import CO1 from '../../img/CO1.png';
import CO2 from '../../img/CO2.png';
import CO3 from '../../img/CO3.png';
import CO4 from '../../img/CO4.png';
import G1 from '../../img/G1.png';
import G2 from '../../img/G2.png';
import G3 from '../../img/G3.png';
import G4 from '../../img/G4.png';
import React, { useState } from 'react';
const filters = [
    { name: 'All', value: 'all' },
    { name: 'Classrooms', value: 'classrooms' },
    { name: 'Library', value: 'library' },
    { name: 'Science Lab', value: 'scienceLab' },
    { name: 'Computer Lab', value: 'computerLab' },
    { name: 'Garden and Nature Area', value: 'garden' },
  ];
  const classrooms = [
    { src: class1, alt: 'Classroom 1' },
    { src: class2, alt: 'Classroom 2' },
    { src: class3, alt: 'Classroom 3' },
    { src: class4, alt: 'Classroom 4' },
  ];
  

const libraryImages = [
  { src: l1, alt: 'Library 1' },
  { src: l2, alt: 'Library 2' },
  { src: l3, alt: 'Library 3' },
  { src: l4, alt: 'Library 4' },
];
/* ScienceLabImages*/

const ScienceLabImages = [
  { src: s1, alt: 'Science Lab 1' },
  { src: s2, alt: 'Science Lab 2' },
  { src: s3, alt: 'Science Lab 3' },
  { src: s4, alt: 'Science Lab 4' },
];
/* ComputerImages*/

const ComputerImages = [
  { src: CO1, alt: 'Computer 1' },
  { src: CO2, alt: 'Computer 2' },
  { src: CO3, alt: 'Computer 3' },
  { src: CO4, alt: 'Computer 4' },
];

/* GardenImages*/

const GardenImages = [
  { src: G1, alt: 'Garde 1' },
  { src: G2, alt: 'Garde 2' },
  { src: G3, alt: 'Garde 3' },
  { src: G4, alt: 'Garde 4' },
];
const Room = () => {
    const [activeFilter, setActiveFilter] = useState('all'); // حالة لتتبع الفلتر النشط
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % classrooms.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + classrooms.length) % classrooms.length);
    };
  return (
    <div>
      <section className="rooms-gallery-section">
      <div className="rooms-gallery-content">
        <button className="gallery-button">Our Gallery</button>
        <h2>Our Rooms Gallery</h2>
        <p>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        {/* هنا سيتم عرض الصور المُفلترة لاحقاً */}
      </div>
    </section>
    <section className="classrooms-section">
      <div className="classrooms-conten">
         <div className="classrooms-card"> {/* حاوية الكرت الأبيض */}
        <div className="classrooms-images-container">  
          {classrooms.map((image, index) => (
            <div className="classrooms-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="classrooms-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    <section className="library-section">
      <div className="library-content">
         <div className="library-card"> {/* حاوية الكرت الأبيض */}
        <div className="library-images-container">  
          {libraryImages.map((image, index) => (
            <div className="library-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="library-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    <section className="ScienceLab-section">
      <div className="ScienceLab-content">
         <div className="ScienceLab-card"> {/* حاوية الكرت الأبيض */}
        <div className="ScienceLab-images-container">  
          {ScienceLabImages.map((image, index) => (
            <div className="ScienceLab-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="ScienceLab-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>

    <section className="Computer-section">
      <div className="Computer-content">
         <div className="Computer-card"> {/* حاوية الكرت الأبيض */}
        <div className="Computer-images-container">  
          {ComputerImages.map((image, index) => (
            <div className="Computer-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="Computer-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>


    <section className="Garden-section">
      <div className="Garden-content">
         <div className="Garden-card"> {/* حاوية الكرت الأبيض */}
        <div className="Garden-images-container">  
          {GardenImages.map((image, index) => (
            <div className="Garden-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="Garden-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Room
